php artisan make:model Article -a;  
php artisan db:seed --class=UserSeeder;    
php artisan migrate;  
php artisan migrate:rollback --step=1;  
php artisan migrate:refresh --step=1;

php artisan migrate:fresh;  
drop all tables from the database and then execute the migrate
php artisan migrate:fresh --seed;  

php artisan make:resource ArticleShowResource
php artisan make:resource ArticlesListResource
php artisan make:resource ArticlesResource

php artisan tinker;  
\App\Models\User::all();
\App\Models\User::all('email');
\App\Models\User::pluck('email');
