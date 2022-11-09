# SCSS Naming convention in this project

## 0.1: The Color palette
- The color palette of this project, import in the scss files by:
```sass
@import './color-palette.sass'
```
## 0.2: The navbar
- The navbar has its own structure to follow, as it is slight more complex than the other components.
- Structure map:
```html
.navbar (<nav>)
|---| .navbar-list (<ul>)
|---| .navbar-list-item (<li>)
|   |---| .nav-link (<a>)
|       |--- (<svg>)
|       |--- .nav-link-text (<span>)
```
- Hmm, maybe I can just format its HTML classes :)

## 1: Section scope
### 1.1: .section
- The whole component is wrapped in a .section class.
- Changes to this class will affect the whole component.
- Contains:
  - .section-title
  - .container-flex

#### .section-title
- The title of the component.

## 2: Component scope
### 2.1: .container-flex
- A flexbox that is used to contain posts or small components.
- Contains:
  - .container-flex-title
  - .container-flex-item
    - .container-flex-item-title (optional)
    - .container-flex-item-content (optional, usually goes after .container-flex-item-title. Looks exactly like .container-flex-item)

#### 2.1.0: .container-flex-title (Optional)
- The title of the item (if applicable).

#### 2.1.1: .container-flex-item
- Items of the container flexbox.
- Examples: posts, classes, etc.


### 3: Media queries (Responsive for different screen sizes)
- The following media queries are used to make the component responsive.
- 