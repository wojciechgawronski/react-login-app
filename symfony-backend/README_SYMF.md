composer require --dev orm-fixtures  
composer require symfony/orm-pack  
composer require --dev symfony/maker-bundle  **// cli: make:controller|command|entity**  
composer require fzaninotto/faker --dev  
composer require symfony/property-access **// do zwracania json-ow**  
composer require symfony/serializer **// do zwracania json-ow**  

composer require symfony/maker-bundle --dev  

php bin/console dbal:run-sql 'SELECT id, title FROM article'

bin/console make:migration;  
bin/console doctrine:migrations:status  
bin/console doctrine:migrations:migrate  
bin/console doctrine:fixtures:load  

php bin/console debug:router  