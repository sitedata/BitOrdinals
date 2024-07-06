import { splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const linkFn = /* @__PURE__ */ createRecipe('link', {
  "size": "md",
  "variant": "underlined"
}, [
  {
    "variant": "underlined",
    "invert": true,
    "css": {
      "_focus": {
        "_before": {
          "background": "accent.background-primary",
          "visibility": "visible"
        },
        "outline": 0
      },
      "_hover": {
        "_before": {
          "background": "accent.background-primary",
          "visibility": "visible"
        }
      },
      "color": "accent.background-secondary"
    }
  }
])

const linkVariantMap = {
  "size": [
    "sm",
    "md",
    "lg"
  ],
  "variant": [
    "underlined",
    "text"
  ],
  "invert": [
    "true"
  ],
  "fullWidth": [
    "true"
  ]
}

const linkVariantKeys = Object.keys(linkVariantMap)

export const link = /* @__PURE__ */ Object.assign(linkFn, {
  __recipe__: true,
  __name__: 'link',
  raw: (props) => props,
  variantKeys: linkVariantKeys,
  variantMap: linkVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, linkVariantKeys)
  },
})