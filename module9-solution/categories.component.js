<h2>Categories</h2>
<ul ng-controller="CategoriesController">
  <li ng-repeat="cat in items">
    <a ui-sref="items({categoryShortName: cat.short_name})">{{ cat.name }}</a>
  </li>
</ul>
//Part 6
//create component called categories that shows all available
//categories in the menu to the user