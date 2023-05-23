<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $article = new Article();
        $article->setUuid('uuid');
        $article->setTitle('title');
        $article->setSlug('Slug');
        $article->setContent('Content');
        
        $manager->persist($article);

        $manager->flush();
    }
}
