import { useLocation } from 'react-router-dom';

import get from 'lodash.get';

import { useAnalytics } from '@app/common/hooks/analytics/use-analytics';
import { useOnMount } from '@app/common/hooks/use-on-mount';

import { BroadcastErrorLayout } from './components/broadcast-error.layout';

export function BroadcastError() {
  const { state } = useLocation();
  const analytics = useAnalytics();
  const msg = get(state, 'error.message', 'your last submitted transaction needs to have at least 1 confirmation to continue to send another transaction');
  const title = get(state, 'title', 'There was an error broadcasting your transaction');
  const body = get(state, 'body', 'Unable to broadcast transaction please try again after your previous transaction has 1 confirmation');

  useOnMount(() => void analytics.track('bitcoin_contract_error', { msg }));

  return (
    <BroadcastErrorLayout
      my="space.05"
      textAlign="center"
      errorPayload={msg}
      title={title}
      body={body}
    />
  );
}
