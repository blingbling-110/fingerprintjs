import { x64hash128, x86hash32 } from './utils/hashing'//覃子俊添加 2021年6月17日
import { load, Agent, LoadOptions, GetOptions, GetResult, hashComponents, componentsToDebugString } from './agent'
import { Component, UnknownComponents, BuiltinComponents } from './sources'

// Exports that are under Semantic versioning
export {
  load,
  Agent,
  LoadOptions,
  GetOptions,
  GetResult,
  hashComponents,
  componentsToDebugString,
  Component,
  UnknownComponents,
  BuiltinComponents,
}
// The default export is a syntax sugar (`import * as FP from '...' → import FP from '...'`).
// It should contain all the public exported values.
export default { load, hashComponents, componentsToDebugString }

// The exports below are for private usage. They may change unexpectedly. Use them at your own risk.
/** Not documented, out of Semantic Versioning, usage is at your own risk */
export const murmurX64Hash128 = x64hash128
export const murmurx86hash32 = x86hash32//覃子俊添加 2021年6月17日
export {
  getFullscreenElement,
  isAndroid,
  isTrident,
  isEdgeHTML,
  isChromium,
  isWebKit,
  isGecko,
  isDesktopSafari,
} from './utils/browser'
export { getScreenFrame } from './sources/screen_frame'
export { getComponents, SourcesToComponents } from './sources'
