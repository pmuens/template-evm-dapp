/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Messages, MessagesInterface } from "../Messages";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "body",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
    ],
    name: "CreateMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "body",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "removedAt",
        type: "uint256",
      },
    ],
    name: "RemoveMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "body",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
    ],
    name: "UpdateMessage",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "body",
        type: "string",
      },
    ],
    name: "createMessage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getMessage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "body",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isEntity",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "removeMessage",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "body",
        type: "string",
      },
    ],
    name: "updateMessage",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ecd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806361b8ce8c1161005057806361b8ce8c146100e95780637f949386146100f257806386f79edb1461010557600080fd5b80630d80fefd14610077578063198a2de9146100a55780632de263d7146100c6575b600080fd5b61008a610085366004610ba2565b610118565b60405161009c96959493929190610c08565b60405180910390f35b6100b86100b3366004610c9a565b6101e2565b60405190815260200161009c565b6100d96100d4366004610ba2565b6103bc565b604051901515815260200161009c565b6100b860005481565b6100d9610100366004610cdc565b610601565b61008a610113366004610ba2565b6107d9565b60016020819052600091825260409091208054918101805461013990610d28565b80601f016020809104026020016040519081016040528092919081815260200182805461016590610d28565b80156101b25780601f10610187576101008083540402835291602001916101b2565b820191906000526020600020905b81548152906001019060200180831161019557829003601f168201915b5050505060028301546003840154600485015460059095015493946001600160a01b039092169390925060ff1686565b60408051808201909152601b81527f4d65737361676520626f64792063616e277420626520656d70747900000000006020820152600090826102405760405162461bcd60e51b81526004016102379190610d63565b60405180910390fd5b50600080549081908061025283610d7d565b919050555060006040518060c0016040528083815260200186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093855250503360208085019190915242604080860182905260608601919091526001608090950185905287845284825290922084518155848301518051959650869591946102f09490860193500190610a58565b5060408281015160028301805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909216919091179055606083015160038301556080830151600483015560a0909201516005909101805460ff191691151591909117905551339083907f5b585b79e2a573d3619a9f6ba042eb0a78df8a72b21d17c81ef554d204c1a1609061038990899089904290610da6565b60405180910390a36103b4604051806060016040528060248152602001610e74602491393384610978565b509392505050565b6000818152600160209081526040808320600501548151808301909252601582527f4d65737361676520646f65736e2774206578697374000000000000000000000092820192909252839160ff166104275760405162461bcd60e51b81526004016102379190610d63565b50600083815260016020908152604091829020600201548251808401909352601683527f43616c6c65722069736e277420746865206f776e657200000000000000000000918301919091528491906001600160a01b0316331461049d5760405162461bcd60e51b81526004016102379190610d63565b50600084815260016020819052604082200180546104ba90610d28565b80601f01602080910402602001604051908101604052809291908181526020018280546104e690610d28565b80156105335780601f1061050857610100808354040283529160200191610533565b820191906000526020600020905b81548152906001019060200180831161051657829003601f168201915b5050506000888152600160208190526040822082815594955090925061055c9150830182610adc565b5060028101805473ffffffffffffffffffffffffffffffffffffffff191690556000600382018190556004820155600501805460ff19169055604051339086907fd0cc15469738e7106dfc2e8683dfcdea14eaea970c65122d4727d658512787ab906105cb9085904290610ddf565b60405180910390a36105f6604051806060016040528060228152602001610e30602291393387610978565b506001949350505050565b6000838152600160209081526040808320600501548151808301909252601582527f4d65737361676520646f65736e2774206578697374000000000000000000000092820192909252859160ff1661066c5760405162461bcd60e51b81526004016102379190610d63565b50600085815260016020908152604091829020600201548251808401909352601683527f43616c6c65722069736e277420746865206f776e657200000000000000000000918301919091528691906001600160a01b031633146106e25760405162461bcd60e51b81526004016102379190610d63565b5060408051808201909152601b81527f4d65737361676520626f64792063616e277420626520656d70747900000000006020820152846107355760405162461bcd60e51b81526004016102379190610d63565b50600086815260016020819052604090912061075391018686610b19565b50600086815260016020526040908190204260049091018190559051339188917f4ed5c660c424f3edda8f4f0711eebc8d61c73b54c530d19ac59253d7261b24bf916107a2918a918a91610da6565b60405180910390a36107cd604051806060016040528060228152602001610e52602291393388610978565b50600195945050505050565b6000818152600160209081526040808320600501548151808301909252601582527f4d65737361676520646f65736e2774206578697374000000000000000000000092820192909252606091839182918291829188919060ff166108505760405162461bcd60e51b81526004016102379190610d63565b506108906040518060400160405280601b81526020017f4c6f6164696e67206d65737361676520776974682069642025732e0000000000815250896109d9565b600088815260016020819052604090912080546002820154600383015460048401546005850154949095018054939590946001600160a01b03909316939192909160ff9091169085906108e290610d28565b80601f016020809104026020016040519081016040528092919081815260200182805461090e90610d28565b801561095b5780601f106109305761010080835404028352916020019161095b565b820191906000526020600020905b81548152906001019060200180831161093e57829003601f168201915b505050505094509650965096509650965096505091939550919395565b6109d483838360405160240161099093929190610e01565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166307c8121760e01b179052610a37565b505050565b610a3382826040516024016109ef929190610ddf565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166309710a9d60e41b179052610a37565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b828054610a6490610d28565b90600052602060002090601f016020900481019282610a865760008555610acc565b82601f10610a9f57805160ff1916838001178555610acc565b82800160010185558215610acc579182015b82811115610acc578251825591602001919060010190610ab1565b50610ad8929150610b8d565b5090565b508054610ae890610d28565b6000825580601f10610af8575050565b601f016020900490600052602060002090810190610b169190610b8d565b50565b828054610b2590610d28565b90600052602060002090601f016020900481019282610b475760008555610acc565b82601f10610b605782800160ff19823516178555610acc565b82800160010185558215610acc579182015b82811115610acc578235825591602001919060010190610b72565b5b80821115610ad85760008155600101610b8e565b600060208284031215610bb457600080fd5b5035919050565b6000815180845260005b81811015610be157602081850181015186830182015201610bc5565b81811115610bf3576000602083870101525b50601f01601f19169290920160200192915050565b86815260c060208201526000610c2160c0830188610bbb565b90506001600160a01b038616604083015284606083015283608083015282151560a0830152979650505050505050565b60008083601f840112610c6357600080fd5b50813567ffffffffffffffff811115610c7b57600080fd5b602083019150836020828501011115610c9357600080fd5b9250929050565b60008060208385031215610cad57600080fd5b823567ffffffffffffffff811115610cc457600080fd5b610cd085828601610c51565b90969095509350505050565b600080600060408486031215610cf157600080fd5b83359250602084013567ffffffffffffffff811115610d0f57600080fd5b610d1b86828701610c51565b9497909650939450505050565b600181811c90821680610d3c57607f821691505b60208210811415610d5d57634e487b7160e01b600052602260045260246000fd5b50919050565b602081526000610d766020830184610bbb565b9392505050565b6000600019821415610d9f57634e487b7160e01b600052601160045260246000fd5b5060010190565b604081528260408201528284606083013760006060848301015260006060601f19601f8601168301019050826020830152949350505050565b604081526000610df26040830185610bbb565b90508260208301529392505050565b606081526000610e146060830186610bbb565b6001600160a01b03949094166020830152506040015291905056fe25732072656d6f76656420746865206d65737361676520776974682069642025732e2573207570646174656420746865206d65737361676520776974682069642025732e257320637265617465642061206e6577206d65737361676520776974682069642025732ea26469706673582212206fae7e1c79e4e32a5e920e82dd3d1018cf28dd9e02eeb39b97a50249508fa1d564736f6c634300080b0033";

type MessagesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MessagesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Messages__factory extends ContractFactory {
  constructor(...args: MessagesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Messages> {
    return super.deploy(overrides || {}) as Promise<Messages>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Messages {
    return super.attach(address) as Messages;
  }
  connect(signer: Signer): Messages__factory {
    return super.connect(signer) as Messages__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessagesInterface {
    return new utils.Interface(_abi) as MessagesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Messages {
    return new Contract(address, _abi, signerOrProvider) as Messages;
  }
}
