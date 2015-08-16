angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Bar Index</title>\n    <!-- inject:css -->\n    <!-- endinject -->\n    <script type=\"text/javascript\"\n            src=\"https://maps.googleapis.com/maps/api/js\">\n    </script>\n    <!-- inject:js -->\n    <!-- endinject -->\n\n</head>\n<body ng-app=\"BarIndex\">\n    <div ui-view></div>\n</body>\n</html>");
$templateCache.put("app/admin/index.html","<header>\n    <div class=\"common_logo header\">\n        Bar<br>Index\n    </div>\n    <a class=\"common_header_item\" ui-sref=\"admin.bars\">Бары</a>\n    <a class=\"common_header_item\"ui-sref=\"admin.users\">Пользователи</a>\n    <div class=\"common_header_item control-button-dropdown\" ui-sref=\"admin.profile\">\n        <div class=\"title\" >Профиль</div>\n        <div class=\"items\">\n            <a class=\"item\" href=\"/logout\">Выйти</a>\n        </div>\n    </div>\n</header>\n<div class=\"admin-section\" ui-view></div>");
$templateCache.put("app/main/index.html","<header>This is main view</header>\n<div class=\"main_section\" ui-view></div>");
$templateCache.put("app/admin/frontpage/index.html","<h1>Главная</h1>");
$templateCache.put("app/common/door/index.html","<header class=\"center-text\">\n    <div ui-sref=\"main\" class=\"common_logo header\">\n        Bar<br>Index\n    </div>\n</header>\n<div class=\"pure-u-md-4-5 center-block\" ui-view></div>\n");
$templateCache.put("app/common/partials/barlist.html","<div class=\"common-barlist\">\n    <div class=\"common-barlist-filter\">\n    </div>\n    <div ng-click=\"ctrlBarList.onBar(bar.id)\" class=\"common-barlist-item\" ng-repeat=\"bar in ctrlBarList.bars | orderBy:\'-created_at\'\" ng-disabled=\"ctrlBarList.isBarActive(bar)\">\n        <div class=\"common-barlist-item-image pure-u-1-3 pure-img\" style=\"background-image:url({{bar.coverUrl}});\"></div>\n        <div class=\"common-barlist-item-description\">\n            <div class=\"common-barlist-item-title\">\n                {{bar.name}}\n            </div>\n            <div class=\"common-barlist-item-evals\">\n                <div class=\"common-barlist-item-eval\">\n                    <div ng-show=\"bar.eval_param1_avg >= 0.7\" class=\"common-bar-eval-gold\"><i class=\"fa fa-star\"></i></div>\n                    <div ng-show=\"bar.eval_param1_avg > 0.5 && bar.eval_param1_avg < 0.7\" class=\"common-bar-eval-silver\"><i class=\"fa fa-star\"></i></div>\n                    <div ng-show=\"bar.eval_param1_avg <= 0.5\" class=\"common-bar-eval-silver\"><i class=\"fa fa-star-o\"></i></div>\n                </div>\n                <div class=\"common-barlist-item-eval\">\n                    <div ng-show=\"bar.eval_param2_avg >= 0.7\" class=\"common-bar-eval-gold\"><i class=\"fa fa-star\"></i></div>\n                    <div ng-show=\"bar.eval_param2_avg > 0.5 && bar.eval_param2_avg < 0.7\" class=\"common-bar-eval-silver\"><i class=\"fa fa-star\"></i></div>\n                    <div ng-show=\"bar.eval_param2_avg <= 0.5\" class=\"common-bar-eval-silver\"><i class=\"fa fa-star-o\"></i></div>\n                </div>\n                <div class=\"common-barlist-item-eval\">\n                    <div ng-show=\"bar.eval_param3_avg >= 0.7\" class=\"common-bar-eval-gold\"><i class=\"fa fa-star\"></i></div>\n                    <div ng-show=\"bar.eval_param3_avg > 0.5 && bar.eval_param3_avg < 0.7\" class=\"common-bar-eval-silver\"><i class=\"fa fa-star\"></i></div>\n                    <div ng-show=\"bar.eval_param3_avg <= 0.5\" class=\"common-bar-eval-silver\"><i class=\"fa fa-star-o\"></i></div>\n                </div>\n                <div class=\"common-barlist-item-eval\">\n                    <div ng-show=\"bar.eval_param4_avg >= 0.7\" class=\"common-bar-eval-gold\"><i class=\"fa fa-star\"></i></div>\n                    <div ng-show=\"bar.eval_param4_avg > 0.5 && bar.eval_param4_avg < 0.7\" class=\"common-bar-eval-silver\"><i class=\"fa fa-star\"></i></div>\n                    <div ng-show=\"bar.eval_param4_avg <= 0.5\" class=\"common-bar-eval-silver\"><i class=\"fa fa-star-o\"></i></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("app/admin/barList/templates/index.html","<div class=\"admin-barlist-wrapper pure-u-1 pure-u-md-1-3 pure-u-sm-1-2\" ng-controller=\"BarIndex.Admin.BarList.BarListController as ctrlBarList\">\n    <div class=\"common-barlist-add center-text\" ng-click=\"ctrlBarList.onBarAdd()\" ng-disabled=\"ctrlBarList.addActive()\">\n        <i class=\"fa fa-plus-circle\"></i>\n    </div>\n    <div class=\"common-barlist-wrapper pure-u-1\" ng-include src=\"ctrlBarList.template\">\n    </div>\n</div>\n<div class=\"pure-g\">\n    <div class=\"pure-u-lg-1-3 pure-u-md-1-3 pure-u-sm-1-2\"></div>\n    <div class=\"pure-u-md-2-3 pure-u-sm-1-2 admin-barlist-section\" ui-view ng-cloak></div>\n</div>\n");
$templateCache.put("app/admin/users/templates/index.html","<h1>Пользователи</h1>\n<table class=\"pure-table pure-table-horizontal\">\n    <thead>\n    <tr>\n        <th>#</th>\n        <th>E-mail</th>\n        <th>Name</th>\n        <th>Permission level</th>\n        <th>Description</th>\n        <th>Photo</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    <tr ng-repeat=\"user in ctrl.users | orderBy:\'id\'\">\n        <td>{{user.id}}</td>\n        <td>{{user.email}}</td>\n        <td>{{user.name}}</td>\n        <td>{{user.permission_level}}</td>\n        <td>{{user.description}}</td>\n        <td>{{user.photo_url}}</td>\n    </tr>\n    </tbody>\n</table>");
$templateCache.put("app/common/door/partials/login.html","<div class=\"common-door-login\">\n    <form class=\"pure-form\">\n        <input type=\"email\" placeholder=\"E-mail\" ng-model=\"ctrl.data.email\"/>\n        <input type=\"password\" placeholder=\"Пароль\" ng-model=\"ctrl.data.password\"/>\n        <div>\n            <button class=\"pure-button button-secondary\" disabled>Всё забыл</button>\n            <button class=\"pure-button button-primary\" ng-click=\"ctrl.login()\">Войти</button>\n        </div>\n    </form>\n</div>");
$templateCache.put("app/common/door/partials/registration.html","<div class=\"common-door-registration\">\n    <form class=\"pure-form\">\n        <input type=\"email\" placeholder=\"E-mail\" ng-model=\"ctrl.data.email\"/>\n        <input type=\"password\" placeholder=\"Пароль\" ng-model=\"ctrl.data.password\"/>\n        <input type=\"text\" lang=\"en\" placeholder=\"Имя/никнэйм\" ng-model=\"ctrl.data.name\"/>\n        <button class=\"pure-button button-primary\" ng-click=\"ctrl.registration()\">Зарегистрироваться</button>\n    </form>\n</div>");
$templateCache.put("app/common/door/templates/loginView.html","<div class=\"common-door-loginview center-text\">\n     <h1>Привет, бро! йо мазафака</h1>\n     <h2>Войди, используя свой e-mail и пароль</h2>\n     <div class=\"common-door-login-wrapper-column pure-form-stacked pure-u-1 pure-u-lg-1-4 pure-u-md-1-3 pure-u-sm-1-2\"\n          ng-controller=\"Common.Door.LoginController as ctrl\" ng-include src=\"ctrl.template\"></div>\n     <h2>Или зарегистрируйся</h2>\n     <div class=\"common-door-reg-wrapper-column pure-form-stacked pure-u-1 pure-u-lg-1-4 pure-u-md-1-3 pure-u-sm-1-2\"\n          ng-controller=\"Common.Door.RegistrationController as ctrl\" ng-include src=\"ctrl.template\"></div>\n     <br/>\n     <br/>\n</div>\n");
$templateCache.put("app/admin/barList/bar/templates/add.html","<h1 class=\"common-section-header\">Добавить бар</h1>\n<div class=\"pure-g\">\n    <form class=\"pure-form pure-form-aligned pure-u-1 pure-u-sm-1-2\">\n        <fieldset>\n            <div class=\"pure-control-group\">\n                <label for=\"name\">Название бара (*)</label>\n                <input id=\"name\" type=\"text\" placeholder=\"Название\" ng-model=\"ctrl.data.name\">\n            </div>\n\n            <div class=\"pure-controls\">\n                <label>&nbsp;</label>\n                <button type=\"submit\" class=\"pure-button button-primary\" ng-click=\"ctrl.onAdd()\" ng-disabled=\"ctrl.isAddDisabled()\">Добавить</button>\n            </div>\n        </fieldset>\n    </form>\n    <div id=\"admin-map\" class=\"pure-u-1 pure-u-sm-1-2\"></div>\n</div>\n");
$templateCache.put("app/admin/barList/bar/templates/bar.html","<h1 class=\"common-section-header\">{{ctrl.data.name}} <span ng-click=\"ctrl.onEdit()\">(ред.)</span></h1>\n<div class=\"common-bar-view pure-g\">\n    <div class=\"pure-u-1 pure-u-md-2-5\">\n        <div class=\"common-bar-cover\" style=\"background-image: url({{ctrl.data.coverUrl}})\"></div>\n        <div class=\"pure-g common-bar-price center-text\">\n            <div class=\"pure-u-1-3\">\n                <p>Водка</p>\n                <p>{{ctrl.data.price_vodka}}</p>\n            </div>\n            <div class=\"pure-u-1-3\">\n                <p>Шот</p>\n                <p>{{ctrl.data.price_shot}}</p>\n            </div>\n            <div class=\"pure-u-1-3\">\n                <p>Лонг</p>\n                <p>{{ctrl.data.price_long}}</p>\n            </div>\n        </div>\n        <div class=\"common-bar-evals\">\n            <div class=\"div\">eval1</div>\n            <div class=\"div\">eval2</div>\n            <div class=\"div\">eval3</div>\n            <div class=\"div\">eval4</div>\n        </div>\n        <div class=\"common-bar-address\">{{ctrl.data.address}}</div>\n        <div id=\"map\" class=\"common-bar-map\"></div>\n    </div>\n    <div class=\"pure-u-1 pure-u-md-3-5\">\n        <div class=\"common-bar-description\">\n            {{ctrl.data.description}}\n        </div>\n        <div class=\"common-bar-album\">\n            <div class=\"container pure-u-1-2 pure-u-lg-1-3\" ng-repeat=\"photo in ctrl.data.album\">\n                <div style=\"background-image: url({{photo.url.url}});\"></div>\n            </div>\n        </div>\n        <div class=\"common-bar-comments\">\n            Комментарии\n        </div>\n    </div>\n</div>");
$templateCache.put("app/admin/barList/bar/templates/edit.html","<h1 class=\"common-section-header\">Редактировать бар</h1>\n<h2>Общая информация</h2>\n<div class=\"pure-g\">\n    <form class=\"pure-form pure-form-aligned pure-u-1 pure-u-sm-1-2\">\n        <fieldset>\n\n            <div class=\"pure-control-group\">\n                <label for=\"name\">Название бара</label>\n                <input id=\"name\" type=\"text\" placeholder=\"Название\" ng-model=\"ctrl.common.name\">\n            </div>\n\n            <div class=\"pure-control-group\">\n                <label for=\"description\">Описание</label>\n                <textarea id=\'description\' placeholder=\"Описание\" ng-model=\"ctrl.common.description\"></textarea>\n            </div>\n\n            <div class=\"pure-control-group\">\n                <label for=\"address\">Адрес бара</label>\n                <input id=\"address\" type=\"text\" placeholder=\"Адрес\" ng-model=\"ctrl.common.address\">\n            </div>\n            <div class=\"pure-control-group\">\n                <label>&nbsp;</label>\n                <button type=\"submit\" class=\"pure-button button-primary\" ng-click=\"ctrl.onAddressCheck()\">Проверить</button>\n            </div>\n\n            <div class=\"pure-controls\">\n                <label>&nbsp;</label>\n                <button type=\"submit\" class=\"pure-button button-primary\" ng-click=\"ctrl.commonUpdate()\">Обновить</button>\n            </div>\n\n        </fieldset>\n    </form>\n    <div id=\"admin-map\" class=\"pure-u-1 pure-u-sm-1-2\"></div>\n</div>\n\n<h2>Цены</h2>\n<div class=\"pure-g\">\n    <form class=\"pure-form pure-form-aligned pure-u-1 pure-u-sm-1-2\">\n        <fieldset>\n\n            <div class=\"pure-control-group\">\n                <label for=\"price_1\">Цена водки</label>\n                <input id=\"price_1\" type=\"number\" placeholder=\"Цена\" ng-model=\"ctrl.price.price_vodka\">\n            </div>\n\n            <div class=\"pure-control-group\">\n                <label for=\"price_2\">Цена шота</label>\n                <input id=\"price_2\" type=\"number\" placeholder=\"Цена\" ng-model=\"ctrl.price.price_shot\">\n            </div>\n\n            <div class=\"pure-control-group\">\n                <label for=\"price_3\">Цена лонга</label>\n                <input id=\"price_3\" type=\"number\" placeholder=\"Цена\" ng-model=\"ctrl.price.price_long\">\n            </div>\n\n            <div class=\"pure-controls\">\n                <label>&nbsp;</label>\n                <button type=\"submit\" class=\"pure-button button-primary\" ng-click=\"ctrl.priceUpdate()\">Обновить</button>\n            </div>\n\n        </fieldset>\n    </form>\n</div>\n\n<h2>Фотографии</h2>\n<div class=\"pure-g\">\n    <form class=\"pure-form pure-form-aligned pure-u-1 pure-u-sm-1-2\">\n        <fieldset>\n\n            <div class=\"pure-control-group\">\n                <label for=\"photo\">Фотография</label>\n                <input id=\"photo\" type=\"text\" placeholder=\"Url\" ng-model=\"ctrl.photos.newPhotoUrl\">\n            </div>\n            <div class=\"pure-control-group\">\n                <label>&nbsp;</label>\n                <button type=\"submit\" class=\"pure-button button-primary\" ng-click=\"ctrl.addPhoto()\">Загрузить</button>\n            </div>\n\n\n            <div class=\"pure-controls\">\n                <label>&nbsp;</label>\n                <button type=\"submit\" class=\"pure-button button-primary\" ng-click=\"ctrl.coverUpdate()\">Сделать обложкой</button>\n            </div>\n\n        </fieldset>\n    </form>\n    <div class=\"admin-bar-photoset pure-u-1\">\n        <img class=\"pure-img\" src=\"{{photo.url.url}}\" ng-repeat=\"photo in ctrl.photos.album\" ng-click=\"ctrl.setCoverCandidate(photo)\"\n             ng-class=\"{cover: photo.id === ctrl.originalBar.cover, selected: photo.id === ctrl.photos.cover}\"/>\n    </div>\n</div>\n</div>\n");}]);