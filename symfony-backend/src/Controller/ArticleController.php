<?php

namespace App\Controller;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends AbstractController
{

    public function __construct(
        protected ArticleRepository $articleRepository,
        )
    { }

    
    #[Route('/article', name: 'app_article')]
    public function index(): JsonResponse
    {
        $articles = $this->articleRepository->findAll(Article::class);

        return $this->json([
            'articles' => $articles
        ]);
    }
}
