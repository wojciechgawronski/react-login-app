<?php

namespace App\Http\Controllers\api;

use App\Models\Article;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Resources\ArticlesResource;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use App\Http\Resources\ArticleShowResource;
use App\Http\Resources\ArticlesListResource;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ArticlesResource::collection(Article::paginate(5));
    }

    public function list()
    {
        return ArticlesListResource::collection(Article::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {
        $title = $request->title;
        $content = $request->content;

        Article::create([
            'uuid' => Str::uuid(),
            'title' => $title,
            'slug' => Str::slug($title),
            'content' => $content,
            'user_id' => 1
        ]);

        return response()->json([
            'message' => 'Article created',
        ], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        return ArticleShowResource::make($article);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        return ArticleShowResource::make($article);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleRequest $request, Article $article)
    {
        $article->update($request->validated());

        return response()->json([
            'status' => 'OK',
            'message' => 'Article updated'
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        $article->delete();

        return response()->json([
            'message' => 'Article deleted'
        ], 204);
    }
}
