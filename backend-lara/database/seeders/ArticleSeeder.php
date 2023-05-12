<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Article::factory()->count(3)->create();
        
        // $title =  'Some title';
        // DB::table('articles')->insert([
        //     'uuid' => Str::uuid(),
        //     'title' => $title,
        //     'slug' => Str::slug($title),
        //     'content' => 'Some content',
        //     'user_id' => 1,
        //     'created_at' => date("Y-m-d H:i:s"),
        //     'updated_at' => date("Y-m-d H:i:s"),
        // ]);
    }
}
