import { BrowserClient, Feedback, getCurrentHub } from '@sentry/react';
import { Flex } from 'leather-styles/jsx';

import { analytics } from '@shared/utils/analytics';

import { useThemeSwitcher } from '@app/common/theme-provider';
import { Button } from '@app/ui/components/button/button';
import { MegaphoneIcon } from '@app/ui/components/icons/megaphone-icon';

export function openFeedbackDialog() {
  void analytics.track('user_clicked_feedback_button');
  const client = getCurrentHub().getClient<BrowserClient>();
  const feedback = client?.getIntegration(Feedback);
  if (!feedback) return;
  feedback.openDialog();
}

export function FeedbackButton() {
  const { theme } = useThemeSwitcher();
}
