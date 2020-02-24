import store from './store';
import * as actions from './actions';

export function addUserMessage(text) {
  store.dispatch(actions.addUserMessage(text));
}

export function addResponseMessage(text) {
  store.dispatch(actions.addResponseMessage(text));
}

export function addLinkSnippet(link) {
  store.dispatch(actions.addLinkSnippet(link));
}

export function toggleMsgLoader(newValue) {
  store.dispatch(actions.toggleMsgLoader(newValue));
}

export function renderCustomComponent(component, props, showAvatar = false) {
  store.dispatch(actions.renderCustomComponent(component, props, showAvatar));
}

export function toggleDarkMode() {
  store.dispatch(actions.toggleDarkMode());
}

export function setPlaceholder(newValue) {
  store.dispatch(actions.setPlaceholder(newValue));
}

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}

export function toggleInputDisabled() {
  store.dispatch(actions.toggleInputDisabled());
}

export function dropMessages() {
  store.dispatch(actions.dropMessages());
}

export function isWidgetOpened() {
  return store.getState().behavior.get('showChat');
}

export function setQuickButtons(buttons) {
  store.dispatch(actions.setQuickButtons(buttons));
}
