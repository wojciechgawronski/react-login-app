<?php

namespace App\Controller;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/api/v1') ]
class ArticleController extends AbstractController
{

    public function __construct(
        protected ArticleRepository $articleRepository,
        )
    { }
    
    #[Route('/articles', name: 'app_article', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $articles = $this->articleRepository->findAll(Article::class);

        return $this->json([
            'data' => [
                'articles' =>  $articles,
            ]
        ], 200, ["Content-Type" => "application/json"]);
    }

    #[Route('/articles/{id}', name: 'app_article_show', methods: ['GET'])]
    public function show(EntityManagerInterface $em, int $id): JsonResponse
    {
        $article = $em->getRepository(Article::class)->find($id);

        return $this->json([
            'data' => [
                'article' =>  $article,
            ],], 200, ["Content-Type" => "application/json"]
        );
    }

    #[Route('/articles/{id}', name: 'app_article_edit', methods: ['PUT'])]
    public function edit(Request $request, Article $article, EntityManagerInterface $em)
    {   
        if (!$request->getContentTypeFormat() === 'form') {
            return null;
        }

        $title = $request->get('title');
        $slug = $this->_slug($title);
        $content = $request->get('content');
        
        $article->setTitle($title);
        $article->setSlug($slug);
        $article->setContent($content);
        
        $em->persist($article);
        $em->flush();

        return $this->json([
            'article' => $article,
        ]);
    }

    #[Route('/articles', name: 'app_article_new', methods: ['POST'])]
    public function new(Request $request, EntityManagerInterface $em): JsonResponse|null
    {
        if (!$request->getContentTypeFormat() === 'form') {
            return null;
        }

        $title = $request->get('title');
        $content = $request->get('content');

        $article = new Article();
        $article->setTitle($title);
        $article->setUuid(Uuid::v4());
        $article->setContent($content);
        $article->setSlug($this->_slug($title));

        $em->persist($article);
        $em->flush();

        return $this->json([
            'title' => $title,
            'content' => $content,
        ]);
    }

    #[Route('/articles/{id}', name: 'app_article_delete', methods: ['DELETE'])]
    public function delete(Article $article)
    {
        $this->articleRepository->remove($article, true);

        return $this->json([
            'status' => 'OK',
            'message' => 'Article deleted.'
        ], 200, ["Content-Type" => "application/json"]);
    }

    private function _slug(string $string) {
        $string = preg_replace('/[^a-zA-Z0-9\s]/', '', $string);
        $string = strtolower($string);
        $string = str_replace(' ', '-', $string);
        return $string;
    }
}
