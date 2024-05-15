import { splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const buttonFn = /* @__PURE__ */ createRecipe('button', {
  "size": "md",
  "variant": "solid"
}, [
  {
    "css": {
      "_active": {
        "bg": "accent.component-background-pressed"
      },
      "_hover": {
        "bg": "accent.background-primary"
      },
      "_loading": {
        "_after": {
          "borderColor": "accent.text-primary"
        }
      },
      "bg": "accent.background-secondary",
      "color": "accent.text-primary"
    },
    "invert": true,
    "variant": "solid"
  },
  {
    "css": {
      "_active": {
        "bg": "accent.text-primary"
      },
      "_before": {
        "borderColor": "accent.background-secondary"
      },
      "_hover": {
        "bg": "accent.action-primary-hover"
      },
      "_loading": {
        "_after": {
          "borderColor": "accent.text-primary"
        }
      },
      "border": "1px solid {colors.accent.background-secondary}",
      "color": "accent.background-secondary"
    },
    "invert": true,
    "variant": "outline"
  },
  {
    "css": {
      "p": "space.02"
    },
    "trigger": true,
    "variant": "ghost"
  }
])

const buttonVariantMap = {
  "size": [
    "sm",
    "md"
  ],
  "variant": [
    "solid",
    "outline",
    "ghost"
  ],
  "invert": [
    "true"
  ],
  "fullWidth": [
    "true"
  ],
  "trigger": [
    "true"
  ]
}

const buttonVariantKeys = Object.keys(buttonVariantMap)

export const button = /* @__PURE__ */ Object.assign(buttonFn, {
  __recipe__: true,
  __name__: 'button',
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
})