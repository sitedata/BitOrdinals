import { Dialog } from '@radix-ui/themes';
import { OnboardingSelectors } from '@tests/selectors/onboarding.selectors';
import { css } from 'leather-styles/css';
import { Box, Flex, HStack, Stack, styled } from 'leather-styles/jsx';

import { Button } from '@app/ui/components/button/button';
import { CheckmarkIcon } from '@app/ui/components/icons/checkmark-icon';
import { LeatherIcon } from '@app/ui/components/icons/leather-icon';

interface ReasonToAllowDiagnosticsProps {
  text: string;
}
function ReasonToAllowDiagnostics({ text }: ReasonToAllowDiagnosticsProps) {
}

interface AllowDiagnosticsLayoutProps {
  onUserAllowDiagnostics(): void;
  onUserDenyDiagnostics(): void;
}
export function AllowDiagnosticsLayout(props: AllowDiagnosticsLayoutProps) {
}
