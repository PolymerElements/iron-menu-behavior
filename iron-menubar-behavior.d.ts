/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-menubar-behavior.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="iron-menu-behavior.d.ts" />

declare namespace Polymer {

  /**
   * `Polymer.IronMenubarBehavior` implements accessible menubar behavior.
   */
  interface IronMenubarBehavior {
    keyBindings: object|null;
    hostAttributes: object|null;
    _onUpKey(event: any): any;
    _onDownKey(event: any): any;
    _onKeydown(event: any): any;
    _isRTL(): any;
    _onLeftKey(event: any): any;
    _onRightKey(event: any): any;
  }

  const IronMenubarBehavior: object;
}