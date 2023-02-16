import React from "react";
import { Select, TextInput, Button } from '@mantine/core';


export const AddAssetInput = () => {
  const [selectedAsset, setSelectedAsset] = React.useState<string | null>(null);
  const [code, setCode] = React.useState('');

  const onSubmit = async (isin: string) => {
    const response = await fetch(`/api/etf/value?isin=${isin}`);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  }

  return <div>
    <Select
      label="Asset type"
      placeholder="Pick asset type"
      onChange={(value) => setSelectedAsset(value)}
      data={[
        { value: 'etf', label: 'ETF' },
        { value: 'crypto', label: 'Crypto' },
        { value: 'custom', label: 'Custom' },
      ]}
    />

    <TextInput
      disabled={selectedAsset === null}
      placeholder="Etf isin"
      label="Full name"
      withAsterisk
      value={code}
      onChange={(event) => setCode(event.currentTarget.value)}
    />
    
    <Button onClick={() => onSubmit(code)}>Add to portfolio</Button>
  </div>;
};
