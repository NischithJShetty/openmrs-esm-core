[Back to README.md](../README.md)

# @openmrs/esm-react-utils

## Table of contents

### Interfaces

- [ComponentConfig](interfaces/ComponentConfig.md)
- [ComponentDecoratorOptions](interfaces/ComponentDecoratorOptions.md)
- [ConfigurableLinkProps](interfaces/ConfigurableLinkProps.md)
- [ExtensionData](interfaces/ExtensionData.md)
- [ExtensionProps](interfaces/ExtensionProps.md)
- [ExtensionSlotBaseProps](interfaces/ExtensionSlotBaseProps.md)
- [OpenmrsReactComponentProps](interfaces/OpenmrsReactComponentProps.md)
- [OpenmrsReactComponentState](interfaces/OpenmrsReactComponentState.md)
- [UserHasAccessProps](interfaces/UserHasAccessProps.md)

### Type aliases

- [Actions](API.md#actions)
- [BoundActions](API.md#boundactions)
- [ExtensionSlotProps](API.md#extensionslotprops)
- [LayoutType](API.md#layouttype)

### Navigation Variables

- [ConfigurableLink](API.md#configurablelink)

### Other Variables

- [ComponentContext](API.md#componentcontext)
- [Extension](API.md#extension)
- [ExtensionSlot](API.md#extensionslot)
- [UserHasAccess](API.md#userhasaccess)

### Functions

- [createUseStore](API.md#createusestore)
- [getAsyncExtensionLifecycle](API.md#getasyncextensionlifecycle)
- [getAsyncLifecycle](API.md#getasynclifecycle)
- [getLifecycle](API.md#getlifecycle)
- [getSyncLifecycle](API.md#getsynclifecycle)
- [openmrsComponentDecorator](API.md#openmrscomponentdecorator)
- [useAssignedExtensionIds](API.md#useassignedextensionids)
- [useAttachedExtensionIds](API.md#useattachedextensionids)
- [useBodyScrollLock](API.md#usebodyscrolllock)
- [useConfig](API.md#useconfig)
- [useConnectedExtensions](API.md#useconnectedextensions)
- [useConnectivity](API.md#useconnectivity)
- [useCurrentPatient](API.md#usecurrentpatient)
- [useExtension](API.md#useextension)
- [useExtensionSlot](API.md#useextensionslot)
- [useExtensionSlotConfig](API.md#useextensionslotconfig)
- [useExtensionSlotMeta](API.md#useextensionslotmeta)
- [useExtensionStore](API.md#useextensionstore)
- [useForceUpdate](API.md#useforceupdate)
- [useLayoutType](API.md#uselayouttype)
- [useLocations](API.md#uselocations)
- [useNavigationContext](API.md#usenavigationcontext)
- [useOnClickOutside](API.md#useonclickoutside)
- [usePagination](API.md#usepagination)
- [useSessionUser](API.md#usesessionuser)
- [useStore](API.md#usestore)
- [useStoreState](API.md#usestorestate)
- [useVisit](API.md#usevisit)
- [useVisitTypes](API.md#usevisittypes)

## Type aliases

### Actions

Ƭ **Actions**: `Function` \| { [key: string]: `Function`;  }

#### Defined in

[packages/framework/esm-react-utils/src/createUseStore.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/createUseStore.ts#L4)

___

### BoundActions

Ƭ **BoundActions**: `Object`

#### Index signature

▪ [key: `string`]: `BoundAction`

#### Defined in

[packages/framework/esm-react-utils/src/createUseStore.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/createUseStore.ts#L5)

___

### ExtensionSlotProps

Ƭ **ExtensionSlotProps**: [`ExtensionSlotBaseProps`](interfaces/ExtensionSlotBaseProps.md) & `React.HTMLAttributes`<`HTMLDivElement`\>

#### Defined in

[packages/framework/esm-react-utils/src/ExtensionSlot.tsx:54](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/ExtensionSlot.tsx#L54)

___

### LayoutType

Ƭ **LayoutType**: ``"tablet"`` \| ``"phone"`` \| ``"desktop"``

#### Defined in

[packages/framework/esm-react-utils/src/useLayoutType.ts:3](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useLayoutType.ts#L3)

## Navigation Variables

### ConfigurableLink

• `Const` **ConfigurableLink**: `React.FC`<[`ConfigurableLinkProps`](interfaces/ConfigurableLinkProps.md)\>

A React link component which calls [[navigate]] when clicked

**`param`** The target path or URL. Supports interpolation. See [[navigate]]

**`param`** Inline elements within the link

**`param`** Any other valid props for an <a> tag except `href` and `onClick`

#### Defined in

[packages/framework/esm-react-utils/src/ConfigurableLink.tsx:32](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/ConfigurableLink.tsx#L32)

___

## Other Variables

### ComponentContext

• `Const` **ComponentContext**: `Context`<[`ComponentConfig`](interfaces/ComponentConfig.md)\>

Available to all components. Provided by `openmrsComponentDecorator`.

#### Defined in

[packages/framework/esm-react-utils/src/ComponentContext.ts:17](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/ComponentContext.ts#L17)

___

### Extension

• `Const` **Extension**: `React.FC`<[`ExtensionProps`](interfaces/ExtensionProps.md)\>

Represents the position in the DOM where each extension within
an extension slot is rendered.

Renders once for each extension attached to that extension slot.

Usage of this component *must* have an ancestor `<ExtensionSlot>`,
and *must* only be used once within that `<ExtensionSlot>`.

#### Defined in

[packages/framework/esm-react-utils/src/Extension.tsx:22](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/Extension.tsx#L22)

___

### ExtensionSlot

• `Const` **ExtensionSlot**: `React.FC`<[`ExtensionSlotProps`](API.md#extensionslotprops)\>

#### Defined in

[packages/framework/esm-react-utils/src/ExtensionSlot.tsx:57](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/ExtensionSlot.tsx#L57)

___

### UserHasAccess

• `Const` **UserHasAccess**: `React.FC`<[`UserHasAccessProps`](interfaces/UserHasAccessProps.md)\>

#### Defined in

[packages/framework/esm-react-utils/src/UserHasAccess.tsx:8](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/UserHasAccess.tsx#L8)

## Functions

### createUseStore

▸ **createUseStore**<`T`\>(`store`): () => `T`(`actions`: [`Actions`](API.md#actions)) => `T` & [`BoundActions`](API.md#boundactions)(`actions?`: [`Actions`](API.md#actions)) => `T` & [`BoundActions`](API.md#boundactions)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `Store`<`T`\> |

#### Returns

`fn`

▸ (): `T`

##### Returns

`T`

▸ (`actions`): `T` & [`BoundActions`](API.md#boundactions)

##### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | [`Actions`](API.md#actions) |

##### Returns

`T` & [`BoundActions`](API.md#boundactions)

▸ (`actions?`): `T` & [`BoundActions`](API.md#boundactions)

##### Parameters

| Name | Type |
| :------ | :------ |
| `actions?` | [`Actions`](API.md#actions) |

##### Returns

`T` & [`BoundActions`](API.md#boundactions)

#### Defined in

[packages/framework/esm-react-utils/src/createUseStore.ts:21](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/createUseStore.ts#L21)

___

### getAsyncExtensionLifecycle

▸ `Const` **getAsyncExtensionLifecycle**<`T`\>(`lazy`, `options`): () => `Promise`<`ReactAppOrParcel`<`any`\>\>

**`deprecated`** Use getAsyncLifecycle instead.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lazy` | () => `Promise`<`Object`\> |
| `options` | [`ComponentDecoratorOptions`](interfaces/ComponentDecoratorOptions.md) |

#### Returns

`fn`

▸ (): `Promise`<`ReactAppOrParcel`<`any`\>\>

##### Returns

`Promise`<`ReactAppOrParcel`<`any`\>\>

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:38](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/getLifecycle.ts#L38)

___

### getAsyncLifecycle

▸ **getAsyncLifecycle**<`T`\>(`lazy`, `options`): () => `Promise`<`ReactAppOrParcel`<`any`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lazy` | () => `Promise`<`Object`\> |
| `options` | [`ComponentDecoratorOptions`](interfaces/ComponentDecoratorOptions.md) |

#### Returns

`fn`

▸ (): `Promise`<`ReactAppOrParcel`<`any`\>\>

##### Returns

`Promise`<`ReactAppOrParcel`<`any`\>\>

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:20](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/getLifecycle.ts#L20)

___

### getLifecycle

▸ **getLifecycle**<`T`\>(`Component`, `options`): `ReactAppOrParcel`<`any`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `React.ComponentType`<`T`\> |
| `options` | [`ComponentDecoratorOptions`](interfaces/ComponentDecoratorOptions.md) |

#### Returns

`ReactAppOrParcel`<`any`\>

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/getLifecycle.ts#L9)

___

### getSyncLifecycle

▸ **getSyncLifecycle**<`T`\>(`Component`, `options`): () => `Promise`<`ReactAppOrParcel`<`any`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `React.ComponentType`<`T`\> |
| `options` | [`ComponentDecoratorOptions`](interfaces/ComponentDecoratorOptions.md) |

#### Returns

`fn`

▸ (): `Promise`<`ReactAppOrParcel`<`any`\>\>

##### Returns

`Promise`<`ReactAppOrParcel`<`any`\>\>

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:28](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/getLifecycle.ts#L28)

___

### openmrsComponentDecorator

▸ **openmrsComponentDecorator**(`userOpts`): (`Comp`: `ComponentType`<`Object`\>) => `ComponentType`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOpts` | [`ComponentDecoratorOptions`](interfaces/ComponentDecoratorOptions.md) |

#### Returns

`fn`

▸ (`Comp`): `ComponentType`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `Comp` | `ComponentType`<`Object`\> |

##### Returns

`ComponentType`<`any`\>

#### Defined in

[packages/framework/esm-react-utils/src/openmrsComponentDecorator.tsx:71](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/openmrsComponentDecorator.tsx#L71)

___

### useAssignedExtensionIds

▸ **useAssignedExtensionIds**(`extensionSlotName`): `string`[]

Gets the assigned extension ids for a given extension slot name.
Does not consider if offline or online.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionSlotName` | `string` | The name of the slot to get the assigned IDs for. |

#### Returns

`string`[]

#### Defined in

[packages/framework/esm-react-utils/src/useAssignedExtensionIds.ts:11](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useAssignedExtensionIds.ts#L11)

___

### useAttachedExtensionIds

▸ **useAttachedExtensionIds**(`extensionSlotName`): `string`[]

Gets the assigned extension ids for the given slot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionSlotName` | `string` |

#### Returns

`string`[]

#### Defined in

[packages/framework/esm-react-utils/src/useAttachedExtensionIds.ts:11](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useAttachedExtensionIds.ts#L11)

___

### useBodyScrollLock

▸ **useBodyScrollLock**(`active`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-react-utils/src/useBodyScrollLock.ts:3](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useBodyScrollLock.ts#L3)

___

### useConfig

▸ **useConfig**(): `Object`

Use this React Hook to obtain your module's configuration.

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructor` | `Function` | The initial value of Object.prototype.constructor is the standard built-in Object constructor. |
| `hasOwnProperty` | (`v`: `PropertyKey`) => `boolean` | - |
| `isPrototypeOf` | (`v`: `Object`) => `boolean` | - |
| `propertyIsEnumerable` | (`v`: `PropertyKey`) => `boolean` | - |
| `toLocaleString` | () => `string` | - |
| `toString` | () => `string` | - |
| `valueOf` | () => `Object` | - |

#### Defined in

[packages/framework/esm-react-utils/src/useConfig.ts:103](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useConfig.ts#L103)

___

### useConnectedExtensions

▸ **useConnectedExtensions**(`extensionSlotName`): `ExtensionRegistration`[]

Gets the assigned extension for a given extension slot name.
Considers if offline or online.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionSlotName` | `string` | The name of the slot to get the assigned extensions for. |

#### Returns

`ExtensionRegistration`[]

#### Defined in

[packages/framework/esm-react-utils/src/useConnectedExtensions.ts:31](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useConnectedExtensions.ts#L31)

___

### useConnectivity

▸ **useConnectivity**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-react-utils/src/useConnectivity.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useConnectivity.ts#L4)

___

### useCurrentPatient

▸ **useCurrentPatient**(`patientUuid?`): [`boolean`, `NullablePatient`, `PatientUuid`, `Error` \| ``null``]

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `PatientUuid` |

#### Returns

[`boolean`, `NullablePatient`, `PatientUuid`, `Error` \| ``null``]

#### Defined in

[packages/framework/esm-react-utils/src/useCurrentPatient.ts:79](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useCurrentPatient.ts#L79)

___

### useExtension

▸ **useExtension**<`TRef`\>(`state?`): [`RefObject`<`TRef`\>, [`ExtensionData`](interfaces/ExtensionData.md) \| `undefined`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TRef` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | `Record`<`string`, `any`\> |

#### Returns

[`RefObject`<`TRef`\>, [`ExtensionData`](interfaces/ExtensionData.md) \| `undefined`]

#### Defined in

[packages/framework/esm-react-utils/src/useExtension.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useExtension.ts#L5)

___

### useExtensionSlot

▸ **useExtensionSlot**(`extensionSlotName`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionSlotName` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `extensionSlotModuleName` | `string` |
| `extensionSlotName` | `string` |
| `extensions` | `ExtensionRegistration`[] |

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionSlot.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useExtensionSlot.ts#L9)

___

### useExtensionSlotConfig

▸ **useExtensionSlotConfig**(`extensionSlotName`): `ExtensionSlotConfigObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionSlotName` | `string` |

#### Returns

`ExtensionSlotConfigObject`

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionSlotConfig.ts:16](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useExtensionSlotConfig.ts#L16)

___

### useExtensionSlotMeta

▸ **useExtensionSlotMeta**<`T`\>(`extensionSlotName`): `Object`

Extract meta data from all extension for a given extension slot.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `ExtensionMeta` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionSlotName` | `string` |

#### Returns

`Object`

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionSlotMeta.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useExtensionSlotMeta.ts#L9)

___

### useExtensionStore

▸ `Const` **useExtensionStore**(): `T`

#### Returns

`T`

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionStore.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useExtensionStore.ts#L4)

▸ `Const` **useExtensionStore**(`actions`): `T` & [`BoundActions`](API.md#boundactions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | [`Actions`](API.md#actions) |

#### Returns

`T` & [`BoundActions`](API.md#boundactions)

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionStore.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useExtensionStore.ts#L4)

▸ `Const` **useExtensionStore**(`actions?`): `T` & [`BoundActions`](API.md#boundactions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions?` | [`Actions`](API.md#actions) |

#### Returns

`T` & [`BoundActions`](API.md#boundactions)

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionStore.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useExtensionStore.ts#L4)

___

### useForceUpdate

▸ **useForceUpdate**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-react-utils/src/useForceUpdate.ts:3](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useForceUpdate.ts#L3)

___

### useLayoutType

▸ **useLayoutType**(): [`LayoutType`](API.md#layouttype)

#### Returns

[`LayoutType`](API.md#layouttype)

#### Defined in

[packages/framework/esm-react-utils/src/useLayoutType.ts:22](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useLayoutType.ts#L22)

___

### useLocations

▸ **useLocations**(): `Location`[]

#### Returns

`Location`[]

#### Defined in

[packages/framework/esm-react-utils/src/useLocations.tsx:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useLocations.tsx#L4)

___

### useNavigationContext

▸ **useNavigationContext**(`context`): `void`

**`deprecated`** Don't use this anymore.

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `NavigationContext` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-react-utils/src/useNavigationContext.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useNavigationContext.ts#L10)

___

### useOnClickOutside

▸ **useOnClickOutside**<`T`\>(`handler`, `active?`): `RefObject`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement``HTMLElement` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `handler` | (`event`: `Event`) => `void` | `undefined` |
| `active` | `boolean` | `true` |

#### Returns

`RefObject`<`T`\>

#### Defined in

[packages/framework/esm-react-utils/src/useOnClickOutside.tsx:3](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useOnClickOutside.tsx#L3)

___

### usePagination

▸ **usePagination**<`T`\>(`data?`, `resultsPerPage?`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `T`[] | `[]` |
| `resultsPerPage` | `number` | `undefined` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `currentPage` | `number` |
| `paginated` | `boolean` |
| `results` | `T`[] |
| `showNextButton` | `boolean` |
| `showPreviousButton` | `boolean` |
| `totalPages` | `number` |
| `goTo` | (`page`: `number`) => `void` |
| `goToNext` | () => `void` |
| `goToPrevious` | () => `void` |

#### Defined in

[packages/framework/esm-react-utils/src/usePagination.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/usePagination.ts#L5)

___

### useSessionUser

▸ **useSessionUser**(): ``null`` \| `SessionUser`

#### Returns

``null`` \| `SessionUser`

#### Defined in

[packages/framework/esm-react-utils/src/useSessionUser.tsx:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useSessionUser.tsx#L4)

___

### useStore

▸ **useStore**<`T`\>(`store`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `Store`<`T`\> |

#### Returns

`T`

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useStore.ts#L4)

▸ **useStore**<`T`\>(`store`, `actions`): `T` & [`BoundActions`](API.md#boundactions)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `Store`<`T`\> |
| `actions` | [`Actions`](API.md#actions) |

#### Returns

`T` & [`BoundActions`](API.md#boundactions)

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useStore.ts#L5)

___

### useStoreState

▸ **useStoreState**<`T`, `U`\>(`store`, `select`): `U`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `Store`<`T`\> |
| `select` | (`state`: `T`) => `U` |

#### Returns

`U`

#### Defined in

[packages/framework/esm-react-utils/src/useStoreState.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useStoreState.ts#L5)

___

### useVisit

▸ **useVisit**(`patientUuid`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `currentVisit` | ``null`` \| `Visit` |
| `error` | ``null`` |

#### Defined in

[packages/framework/esm-react-utils/src/useVisit.ts:11](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useVisit.ts#L11)

___

### useVisitTypes

▸ **useVisitTypes**(): `VisitType`[]

#### Returns

`VisitType`[]

#### Defined in

[packages/framework/esm-react-utils/src/useVisitTypes.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/src/useVisitTypes.ts#L4)
