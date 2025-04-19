<h2>Categories</h2>
<ul ng-controller="CategoriesController">
  <li ng-repeat="cat in items">
    <a ui-sref="items({categoryShortName: cat.short_name})">{{ cat.name }}</a>
  </li>
</ul>