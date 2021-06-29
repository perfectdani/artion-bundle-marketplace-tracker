const BundleMarketplaceContractInfo = {
  address: '0x80bAa89cF5aa41339331916dFf22c5AFEff78885',
  abi: [
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_feeRecipient',
          type: 'address',
        },
        { internalType: 'uint256', name: '_platformFee', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'bundleID',
          type: 'string',
        },
      ],
      name: 'ItemCanceled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'bundleID',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'startingTime',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'isPrivate',
          type: 'bool',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'allowedAddress',
          type: 'address',
        },
      ],
      name: 'ItemListed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'seller',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'buyer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'bundleID',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
      ],
      name: 'ItemSold',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'bundleID',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'address[]',
          name: 'nft',
          type: 'address[]',
        },
        {
          indexed: false,
          internalType: 'uint256[]',
          name: 'tokenId',
          type: 'uint256[]',
        },
        {
          indexed: false,
          internalType: 'uint256[]',
          name: 'quantity',
          type: 'uint256[]',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newPrice',
          type: 'uint256',
        },
      ],
      name: 'ItemUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'creator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'bundleID',
          type: 'string',
        },
      ],
      name: 'OfferCanceled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'creator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'bundleID',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'payToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
      ],
      name: 'OfferCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'platformFee',
          type: 'uint256',
        },
      ],
      name: 'UpdatePlatformFee',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address payable',
          name: 'platformFeeRecipient',
          type: 'address',
        },
      ],
      name: 'UpdatePlatformFeeRecipient',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'string', name: '_bundleID', type: 'string' },
        { internalType: 'address', name: '_creator', type: 'address' },
      ],
      name: 'acceptOffer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'auction',
      outputs: [
        { internalType: 'contract IFantomAuction', name: '', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'string', name: '_bundleID', type: 'string' }],
      name: 'buyItem',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'string', name: '_bundleID', type: 'string' }],
      name: 'cancelListing',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'string', name: '_bundleID', type: 'string' }],
      name: 'cancelOffer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'string', name: '_bundleID', type: 'string' },
        { internalType: 'contract IERC20', name: '_payToken', type: 'address' },
        { internalType: 'uint256', name: '_price', type: 'uint256' },
        { internalType: 'uint256', name: '_deadline', type: 'uint256' },
      ],
      name: 'createOffer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'feeReceipient',
      outputs: [{ internalType: 'address payable', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_owner', type: 'address' },
        { internalType: 'string', name: '_bundleID', type: 'string' },
      ],
      name: 'getListing',
      outputs: [
        { internalType: 'address[]', name: 'nfts', type: 'address[]' },
        { internalType: 'uint256[]', name: 'tokenIds', type: 'uint256[]' },
        { internalType: 'uint256[]', name: 'quantities', type: 'uint256[]' },
        { internalType: 'uint256', name: 'price', type: 'uint256' },
        { internalType: 'uint256', name: 'startingTime', type: 'uint256' },
        { internalType: 'address', name: 'allowedAddress', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'string', name: '_bundleID', type: 'string' },
        { internalType: 'address[]', name: '_nftAddresses', type: 'address[]' },
        { internalType: 'uint256[]', name: '_tokenIds', type: 'uint256[]' },
        { internalType: 'uint256[]', name: '_quantities', type: 'uint256[]' },
        { internalType: 'uint256', name: '_price', type: 'uint256' },
        { internalType: 'uint256', name: '_startingTime', type: 'uint256' },
        { internalType: 'address', name: '_allowedAddress', type: 'address' },
      ],
      name: 'listItem',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '', type: 'address' },
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      name: 'listings',
      outputs: [
        { internalType: 'uint256', name: 'price', type: 'uint256' },
        { internalType: 'uint256', name: 'startingTime', type: 'uint256' },
        { internalType: 'address', name: 'allowedAddress', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'marketplace',
      outputs: [
        {
          internalType: 'contract IFantomMarketplace',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
        { internalType: 'address', name: '', type: 'address' },
      ],
      name: 'offers',
      outputs: [
        { internalType: 'contract IERC20', name: 'payToken', type: 'address' },
        { internalType: 'uint256', name: 'price', type: 'uint256' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      name: 'owners',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'platformFee',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_auction', type: 'address' }],
      name: 'updateAuction',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'string', name: '_bundleID', type: 'string' },
        { internalType: 'uint256', name: '_newPrice', type: 'uint256' },
      ],
      name: 'updateListing',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_marketplace', type: 'address' },
      ],
      name: 'updateMarketplace',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_platformFee', type: 'uint256' },
      ],
      name: 'updatePlatformFee',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_platformFeeRecipient',
          type: 'address',
        },
      ],
      name: 'updatePlatformFeeRecipient',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_nftAddress', type: 'address' },
        { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
        { internalType: 'uint256', name: '_quantity', type: 'uint256' },
      ],
      name: 'validateItemSold',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
}

module.exports = BundleMarketplaceContractInfo
