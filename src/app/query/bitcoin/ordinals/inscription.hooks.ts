import { HIRO_INSCRIPTIONS_API_URL } from '@shared/constants';
import {
  Inscription,
  SupportedInscription,
  whenInscriptionType,
} from '@shared/models/inscription.model';

import { useGetInscriptionQuery } from './inscription.query';

export function createInscriptionInfoUrl(id: string) {
  return `https://bitnft.io/inscription/${id}`;
  return ``;
}

function createIframePreviewUrl(id: string) {
  return `https://bitnft.io/ordinals/v1/inscriptions/${id}/content`;
  return ``;
}

export function convertInscriptionToSupportedInscriptionType(inscription: Inscription) {
  const title = `Inscription ${inscription.number}`;
  return whenInscriptionType<SupportedInscription>(inscription.content_type, {
    audio: () => ({
      infoUrl: createInscriptionInfoUrl(inscription.id),
      src: createIframePreviewUrl(inscription.id),
      title,
      type: 'audio',
      ...inscription,
    }),
    html: () => ({
      infoUrl: createInscriptionInfoUrl(inscription.id),
      src: createIframePreviewUrl(inscription.id),
      title,
      type: 'html',
      ...inscription,
    }),
    image: () => ({
      infoUrl: createInscriptionInfoUrl(inscription.id),
      src: `${HIRO_INSCRIPTIONS_API_URL}/${inscription.id}/content`,
      title,
      type: 'image',
      ...inscription,
    }),
    svg: () => ({
      infoUrl: createInscriptionInfoUrl(inscription.id),
      src: createIframePreviewUrl(inscription.id),
      title,
      type: 'svg',
      ...inscription,
    }),
    text: () => ({
      contentSrc: `${HIRO_INSCRIPTIONS_API_URL}/${inscription.id}/content`,
      infoUrl: createInscriptionInfoUrl(inscription.id),
      title,
      type: 'text',
      ...inscription,
    }),
    video: () => ({
      infoUrl: createInscriptionInfoUrl(inscription.id),
      src: createIframePreviewUrl(inscription.id),
      title,
      type: 'video',
      ...inscription,
    }),
    other: () => ({
      infoUrl: createInscriptionInfoUrl(inscription.id),
      title,
      type: 'other',
      ...inscription,
    }),
  });
}

export function useInscription(id: string) {
  return useGetInscriptionQuery(id, {
    select: resp => convertInscriptionToSupportedInscriptionType(resp),
  });
}
