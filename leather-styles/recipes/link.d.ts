/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface LinkVariant {
  size: "sm" | "md" | "lg"
variant: "underlined" | "text"
invert: boolean
fullWidth: boolean
}

type LinkVariantMap = {
  [key in keyof LinkVariant]: Array<LinkVariant[key]>
}

export type LinkVariantProps = {
  [key in keyof LinkVariant]?: LinkVariant[key] | undefined
}

export interface LinkRecipe {
  __type: LinkVariantProps
  (props?: LinkVariantProps): string
  raw: (props?: LinkVariantProps) => LinkVariantProps
  variantMap: LinkVariantMap
  variantKeys: Array<keyof LinkVariant>
  splitVariantProps<Props extends LinkVariantProps>(props: Props): [LinkVariantProps, Pretty<DistributiveOmit<Props, keyof LinkVariantProps>>]
}

/** The styles for the Link component */
export declare const link: LinkRecipe