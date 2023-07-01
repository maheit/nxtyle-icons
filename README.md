# nxtyle-icons
A modern open source font icon library for applications.

[nxyle-icon library docs](https://maheit.github.io/nxtyle-icons/)


> **Note:**  We are using unicode character (UTF-8), a [Private Use Area (PUA)](https://en.wikipedia.org/wiki/Private_Use_Areas). which only support range of 6,400 code points only. Due to this imitation we can't define all webfont icon together. So we grouped icons by icon category. Each group has its own code and code points are shared with other icon font groups as well. So we can't use all group font together on a single web app, even if you already using another web font Please make sure there won't be any conflict on code points. 

**Groups:**
1. feather icon 
2. box-icons
3. phosphor-icons
4. teeny-icons
5. bootstrap-icons
6. cryptocurrency-icons
7. remix-icons

So Please check available icons in different groups and based on your requirement choose your icon group for your application. 

**Example**
```js
import "nxtyle-icons/feather/index.css";
import "nxtyle-icons/box-icons/regular/index.css";
```

This may end up on conflict, if you try to use feather icon, since you loaded box-icons next to your feather icon (due to cascading of styles) your feather icon refers to box-icon code point. Anyway you can import same group icons that never share common code points. so below snippet will works fine.

```js
import "nxtyle-icons/box-icons/regular/index.css";
import "nxtyle-icons/box-icons/solid/index.css";
```

> Based on response from users, We can work on to group general icons like logos, crypto icons as unique code point across all icon group. those code points will never used with other group icons.


# USAGE

### Using NPM Package

`npm i nxtyle-icons`

## Feather Icons usage
If you want to include in Web application JS file
```js

import "nxtyle-icons/feather/index.css";

```


If you want to include using sass
```css

@import "nxtyle-icons/feather/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-fe-airplay" />
```

view all available [feather icons](https://maheit.github.io/nxtyle-icons/fonts/feather/).

---

## Box Icons Icons usage

Box Icons has three types of icon variants. Namely 

1. regular icons
2. solid icons
3. logo icons

### Regular Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/box-icons/regular/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/box-icons/regular/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-bx-alarm-add" />
```

view all available [Box Regular icons](https://maheit.github.io/nxtyle-icons/fonts/box-icons/regular/).

---

### Solid Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/box-icons/solid/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/box-icons/solid/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-bxs-alarm-add" />
```

view all available [Box Solid icons](https://maheit.github.io/nxtyle-icons/fonts/box-icons/solid/).

---


### Box Logo Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/box-icons/logos/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/box-icons/logos/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-bxl-github" />
```

view all available [Box logo icons](https://maheit.github.io/nxtyle-icons/fonts/box-icons/logos/).

---

## Phosphor Icons usage

Phosphor Icons has six types of icon variants. Namely 

1. regular icons
2. bold icons
3. fill icons
4. light icons
5. thin icons
6. duotone icons

### Regular Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/phosphor-icons/regular/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/phosphor-icons/regular/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-pp-address-book" />
```

view all available [Phosphor regular icons](https://maheit.github.io/nxtyle-icons/fonts/phosphor-icons/regular/).

---

### Bold Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/phosphor-icons/bold/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/phosphor-icons/bold/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-pp-address-book-bold" />
```

view all available [Phosphor bold icons](https://maheit.github.io/nxtyle-icons/fonts/phosphor-icons/bold/).

---

### Fill Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/phosphor-icons/fill/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/phosphor-icons/fill/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-pp-address-book-fill" />
```

view all available [Phosphor fill icons](https://maheit.github.io/nxtyle-icons/fonts/phosphor-icons/fill/).

---
### Light Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/phosphor-icons/light/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/phosphor-icons/light/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-pp-address-book-light" />
```

view all available [Phosphor light icons](https://maheit.github.io/nxtyle-icons/fonts/phosphor-icons/light/).

---
### Thin Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/phosphor-icons/thin/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/phosphor-icons/thin/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-pp-address-book-thin" />
```

view all available [Phosphor thin icons](https://maheit.github.io/nxtyle-icons/fonts/phosphor-icons/thin/).

---
### Duotone Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/phosphor-icons/duotone/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/phosphor-icons/duotone/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-pp-address-book-duotone" />
```

view all available [Phosphor duotone icons](https://maheit.github.io/nxtyle-icons/fonts/phosphor-icons/duotone/).

---

---

## Teeny Icons usage

Teeny Icons has two types of icon variants. Namely 

1. outline icons
2. solid icons

### Outline Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/teeny-icons/outline/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/teeny-icons/outline/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-tny-outline-360" />
```

view all available [Teeny outline icons](https://maheit.github.io/nxtyle-icons/fonts/teeny-icons/outline/).

---

### Solid Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/teeny-icons/solid/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/teeny-icons/solid/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-tny-solid-360" />
```

view all available [Teeny solid icons](https://maheit.github.io/nxtyle-icons/fonts/teeny-icons/solid/).

---

## Bootstrap Icons usage
If you want to include in Web application JS file
```js

import "nxtyle-icons/bootstrap-icons/index.css";

```


If you want to include using sass
```css

@import "nxtyle-icons/bootstrap-icons/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-bi-award-fill" />
```

view all available [bootstrap icons](https://maheit.github.io/nxtyle-icons/fonts/bootstrap-icons/).

---

## Cryptocurrency Icons usage
If you want to include in Web application JS file
```js

import "nxtyle-icons/cryptocurrency-icons/index.css";

```


If you want to include using sass
```css

@import "nxtyle-icons/cryptocurrency-icons/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-crp-btc" />
```

view all available [cryptocurrency icons](https://maheit.github.io/nxtyle-icons/fonts/cryptocurrency-icons/).

---

## Remix Icons usage

Remix Icons categorized by different icon variants based on use cases. Namely 

1. arrows
2. buildings
3. business
4. communication
5. design
6. development
7. device
8. document
9. editor
10. finance
11. health-medical
12. logos
13. map
14. media
15. others
16. system
17. user-faces
18. weather

### Arrows Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/arrows/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/arrows/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-arrows-arrow-down-circle-fill" />
```

view all available [remix arrows icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/arrows/).

---

### buildings Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/buildings/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/buildings/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-buildings-bank-fill" />
```

view all available [remix buildings icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/buildings/).

---

### business Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/business/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/business/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-business-presentation-fill" />
```

view all available [remix business icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/business/).

---

### communication Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/communication/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/communication/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-communication-chat-1-line" />
```

view all available [remix communication icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/communication/).

---

### Design Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/design/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/design/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-design-brush-fill" />
```

view all available [remix design icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/design/).

---

### Development Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/development/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/development/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-development-bug-2-line" />
```

view all available [remix development icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/development/).

---

### Device Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/device/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/device/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-device-battery-2-charge-line" />
```

view all available [remix device icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/device/).

---

### Document Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/document/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/document/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-document-contacts-book-upload-fill" />
```

view all available [remix document icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/document/).

---

### Editor Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/editor/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/editor/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-editor-emphasis-cn" />
```

view all available [remix editor icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/editor/).

---

### Finance Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/finance/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/finance/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-finance-24-hours-fill" />
```

view all available [remix finance icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/finance/).

---

### Health-medical Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/health-medical/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/health-medical/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-health-medical-brain-fill" />
```

view all available [remix health-medical icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/health-medical/).

---

### Logos Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/logos/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/logos/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-logos-alipay-fill" />
```

view all available [remix logos icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/logos/).

---

### Map Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/map/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/map/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-map-anchor-fill" />
```

view all available [remix map icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/map/).

---

### Media Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/media/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/media/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-media-4k-line" />
```

view all available [remix media icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/media/).

---

### Others Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/others/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/others/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-others-basketball-fill" />
```

view all available [remix others icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/others/).

---

### System Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/system/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/system/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-system-add-box-line" />
```

view all available [remix system icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/system/).

---

### User-faces Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/user-faces/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/user-faces/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-user-faces-account-box-fill" />
```

view all available [remix user-faces icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/user-faces/).

---

### Weather Icons
If you want to include in Web application JS file
```js

import "nxtyle-icons/remix-icons/weather/index.css";

```

If you want to include using sass
```css

@import "nxtyle-icons/remix-icons/weather/index.css";

```

That's it. you can now use icons
```HTML
<i class="nxi nxi-rmx-weather-blaze-line" />
```

view all available [remix weather icons](https://maheit.github.io/nxtyle-icons/fonts/remix-icons/weather/).

---

