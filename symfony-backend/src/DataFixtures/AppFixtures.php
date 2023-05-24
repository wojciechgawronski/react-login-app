<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Faker\Factory;
use Symfony\Component\Uid\Uuid;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $title = $faker->text(40); 
            $slug = $this->_slug($title);
            
            $article = new Article();
            
            $article->setUuid(Uuid::v4());
            $article->setTitle($title);
            $article->setSlug($slug);
            $article->setContent($faker->paragraph());
            
            $manager->persist($article);
        }

        $manager->flush();
    }

    private function _slug(string $string) {
        $string = preg_replace('/[^a-zA-Z0-9\s]/', '', $string);
        $string = strtolower($string);
        $string = str_replace(' ', '-', $string);
        return $string;
    }
}
