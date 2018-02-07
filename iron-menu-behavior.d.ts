/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-menu-behavior.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-selector/iron-multi-selectable.d.ts" />
/// <reference path="../iron-a11y-keys-behavior/iron-a11y-keys-behavior.d.ts" />

declare namespace Polymer {

  /**
   * `Polymer.IronMenuBehavior` implements accessible menu behavior.
   */
  interface IronMenuBehavior extends Polymer.IronMultiSelectableBehavior, Polymer.IronA11yKeysBehavior {
    keyBindings: object|null;

    /**
     * Returns the currently focused item.
     */
    readonly focusedItem: object|null;

    /**
     * The attribute to use on menu items to look up the item title. Typing the first
     * letter of an item when the menu is open focuses that item. If unset, `textContent`
     * will be used.
     */
    attrForItemTitle: string|null|undefined;
    disabled: boolean|null|undefined;

    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
     */
    _MODIFIER_KEYS: any[]|null;
    _SEARCH_RESET_TIMEOUT_MS: number;
    _previousTabIndex: number;
    hostAttributes: object|null;
    attached(): any;

    /**
     * Selects the given value. If the `multi` property is true, then the selected state of the
     * `value` will be toggled; otherwise the `value` will be selected.
     *
     * @param value the value to select.
     */
    select(value: string|number): any;

    /**
     * Mutates items in the menu based on provided selection details, so that
     * all items correctly reflect selection state.
     *
     * @param item An item in the menu.
     * @param isSelected True if the item should be shown in a
     * selected state, otherwise false.
     */
    _applySelection(item: Element|null, isSelected: boolean): any;

    /**
     * override _activateHandler
     */
    _activateHandler(event: any): any;

    /**
     * Resets all tabindex attributes to the appropriate value based on the
     * current selection state. The appropriate value is `0` (focusable) for
     * the default selected item, and `-1` (not keyboard focusable) for all
     * other items.
     */
    _resetTabindices(): any;

    /**
     * Sets appropriate ARIA based on whether or not the menu is meant to be
     * multi-selectable.
     *
     * @param multi True if the menu should be multi-selectable.
     */
    _updateMultiselectable(multi: boolean): any;

    /**
     * Given a KeyboardEvent, this method will focus the appropriate item in the
     * menu (if there is a relevant item, and it is possible to focus it).
     *
     * @param event A KeyboardEvent.
     */
    _focusWithKeyboardEvent(event: KeyboardEvent|null): any;
    _clearSearchText(): any;

    /**
     * Focuses the previous item (relative to the currently focused item) in the
     * menu, disabled items will be skipped.
     * Loop until length + 1 to handle case of single item in menu.
     */
    _focusPrevious(): any;

    /**
     * Focuses the next item (relative to the currently focused item) in the
     * menu, disabled items will be skipped.
     * Loop until length + 1 to handle case of single item in menu.
     */
    _focusNext(): any;

    /**
     * Discretely updates tabindex values among menu items as the focused item
     * changes.
     *
     * @param focusedItem The element that is currently focused.
     * @param old The last element that was considered focused, if
     * applicable.
     */
    _focusedItemChanged(focusedItem: Element|null, old: Element|null): any;

    /**
     * A handler that responds to mutation changes related to the list of items
     * in the menu.
     *
     * @param event An event containing mutation records as its
     * detail.
     */
    _onIronItemsChanged(event: CustomEvent|null): any;

    /**
     * Handler that is called when a shift+tab keypress is detected by the menu.
     *
     * @param event A key combination event.
     */
    _onShiftTabDown(event: CustomEvent|null): any;

    /**
     * Handler that is called when the menu receives focus.
     *
     * @param event A focus event.
     */
    _onFocus(event: FocusEvent|null): any;

    /**
     * Handler that is called when the up key is pressed.
     *
     * @param event A key combination event.
     */
    _onUpKey(event: CustomEvent|null): any;

    /**
     * Handler that is called when the down key is pressed.
     *
     * @param event A key combination event.
     */
    _onDownKey(event: CustomEvent|null): any;

    /**
     * Handler that is called when the esc key is pressed.
     *
     * @param event A key combination event.
     */
    _onEscKey(event: CustomEvent|null): any;

    /**
     * Handler that is called when a keydown event is detected.
     *
     * @param event A keyboard event.
     */
    _onKeydown(event: KeyboardEvent|null): any;

    /**
     * Updates this element's tab index when it's enabled/disabled.
     */
    _disabledChanged(disabled: boolean): any;
  }

  const IronMenuBehavior: object;
}
