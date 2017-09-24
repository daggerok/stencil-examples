import { Component } from '@stencil/core';

@Component({
  tag: 'daggerok-app',
  styleUrl: 'daggerok-app.scss',
})
export class DaggerokApp {

  render() {
    return (
      <div>
        <div>App el</div>
        <daggerok-header content={'header content'}></daggerok-header>
        <daggerok-body content={'app body content'}></daggerok-body>
        <daggerok-footer content={'footer content'}></daggerok-footer>
      </div>
    );
  }
}
