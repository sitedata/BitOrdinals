import { useMemo } from 'react';

import { createMoney } from '@shared/models/money.model';

import { sumNumbers } from '@app/common/math/helpers';

import { PsbtInput } from './use-parsed-inputs';
import { PsbtOutput } from './use-parsed-outputs';

function calculateAddressInputsTotal(address: string, inputs: PsbtInput[]) {
  return createMoney(
    sumNumbers(inputs.filter(input => input.address === address).map(input => input.value)),
    'BIT'
  );
}

function calculateAddressOutputsTotal(address: string, outputs: PsbtOutput[]) {
  return createMoney(
    sumNumbers(
      outputs.filter(output => output.address === address).map(output => Number(output.value))
    ),
    'BIT'
  );
}

function calculatePsbtInputsTotal(inputs: PsbtInput[]) {
  return createMoney(sumNumbers(inputs.map(input => input.value)), 'BIT');
}

function calculatePsbtOutputsTotal(outputs: PsbtOutput[]) {
  return createMoney(sumNumbers(outputs.map(output => output.value)), 'BIT');
}

interface UsePsbtTotalsProps {
  bitcoinAddressNativeSegwit: string;
  bitcoinAddressTaproot: string;
  parsedInputs: PsbtInput[];
  parsedOutputs: PsbtOutput[];
}
export function usePsbtTotals({
  bitcoinAddressNativeSegwit,
  bitcoinAddressTaproot,
  parsedInputs,
  parsedOutputs,
}: UsePsbtTotalsProps) {
  return useMemo(
    () => ({
      inputsTotalNativeSegwit: calculateAddressInputsTotal(
        bitcoinAddressNativeSegwit,
        parsedInputs
      ),
      inputsTotalTaproot: calculateAddressInputsTotal(bitcoinAddressTaproot, parsedInputs),
      outputsTotalNativeSegwit: calculateAddressOutputsTotal(
        bitcoinAddressNativeSegwit,
        parsedOutputs
      ),
      outputsTotalTaproot: calculateAddressOutputsTotal(bitcoinAddressTaproot, parsedOutputs),
      psbtInputsTotal: calculatePsbtInputsTotal(parsedInputs),
      psbtOutputsTotal: calculatePsbtOutputsTotal(parsedOutputs),
    }),
    [bitcoinAddressNativeSegwit, bitcoinAddressTaproot, parsedInputs, parsedOutputs]
  );
}
