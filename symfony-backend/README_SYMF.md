composer require --dev orm-fixtures  
composer require symfony/orm-pack  
composer require --dev symfony/maker-bundle  

bin/console doctrine:migrations:status  
bin/console doctrine:migrations:migrate  
bin/console doctrine:fixtures:load

php bin/console debug:router