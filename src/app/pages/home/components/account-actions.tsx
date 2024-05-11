import { useLocation, useNavigate } from 'react-router-dom';

import { ChainID } from '@stacks/transactions';
import { HomePageSelectors } from '@tests/selectors/home.selectors';
import { Flex, FlexProps } from 'leather-styles/jsx';

import { RouteUrls } from '@shared/route-urls';

import { whenStacksChainId } from '@app/common/utils';
import { useConfigBitcoinEnabled } from '@app/query/common/remote-config/remote-config.query';
import { useCurrentAccountNativeSegwitIndexZeroSignerNullable } from '@app/store/accounts/blockchain/bitcoin/native-segwit-account.hooks';
import { useCurrentStacksAccount } from '@app/store/accounts/blockchain/stacks/stacks-account.hooks';
import { useCurrentNetwork } from '@app/store/networks/networks.selectors';
import { ArrowDownIcon } from '@app/ui/components/icons/arrow-down-icon';
import { PlusIcon } from '@app/ui/components/icons/plus-icon';
import { SwapIcon } from '@app/ui/components/icons/swap-icon';
import { CryptoAssetList } from '@app/components/crypto-assets/choose-crypto-asset/crypto-asset-list';
import { openInNewTab } from '@app/common/utils/open-in-new-tab';

import { ActionButton } from './action-button';
import { SendButton } from './send-button';

export function AccountActions(props: FlexProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isBitcoinEnabled = useConfigBitcoinEnabled();
  const stacksAccount = useCurrentStacksAccount();
  const currentBtcSigner = useCurrentAccountNativeSegwitIndexZeroSignerNullable();
  const btcAccount = currentBtcSigner?.address;
  const currentNetwork = useCurrentNetwork();

  const receivePath = isBitcoinEnabled
    ? RouteUrls.Receive
    : `${RouteUrls.Home}${RouteUrls.ReceiveStx}`;

  return (
    <Flex justify="space-between" {...props}>
      <SendButton />
      <ActionButton
        data-testid={HomePageSelectors.ReceiveCryptoAssetBtn}
        icon={<ArrowDownIcon />}
        label="Receive"
        onClick={() => navigate(receivePath, { state: { backgroundLocation: location } })}
      />

      {(!!stacksAccount || !!btcAccount) && (
        <ActionButton
          data-testid={HomePageSelectors.FundAccountBtn}
          icon={<PlusIcon />}
          label="Inscribe NFT"
//          onClick={() => navigate(RouteUrls.FundChooseCurrency)}
	    onClick={() => { openInNewTab('https://bitnet-io.org/NFT/index.html'); }}

        />
      )}
      {(!!stacksAccount || !!btcAccount) && (
        <ActionButton
          data-testid={HomePageSelectors.FundAccountBtn}
          icon={<PlusIcon />}
          label="Deploy BIT-20"
//          onClick={() => navigate(RouteUrls.FundChooseCurrency)}
	    onClick={() => { openInNewTab('https://bitnet-io.org/NFT/deploy.html'); }}

        />
      )}
      {whenStacksChainId(currentNetwork.chain.stacks.chainId)({
        [ChainID.Mainnet]: (
          <ActionButton
          data-testid={HomePageSelectors.FundAccountBtn}
          icon={<PlusIcon />}
          label="Mint BIT-20"
//          onClick={() => navigate(RouteUrls.FundChooseCurrency)}
	    onClick={() => { openInNewTab('https://bitnet-io.org/NFT/mint.html'); }}
          />
        ),
        [ChainID.Testnet]: null,
      })}

      {whenStacksChainId(currentNetwork.chain.stacks.chainId)({
        [ChainID.Mainnet]: (
          <ActionButton
          data-testid={HomePageSelectors.FundAccountBtn}
          icon={<PlusIcon />}
          label="Send BIT-20"
//          onClick={() => navigate(RouteUrls.FundChooseCurrency)}
	    onClick={() => { openInNewTab('https://bitnet-io.org/NFT/transfer.html'); }}
          />
        ),
        [ChainID.Testnet]: null,
      })}


    </Flex>
  );
}
