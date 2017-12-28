import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MySecondComponentComponent } from './my-second-component.component';

import { EchoService } from '../../services/echo.service';

/**
 * Create a mock of the existing service by simply extending it and overriding some of the methods you wish to use
 * in your tests.
 * See https://angular.io/guide/testing#test-a-component-with-a-dependency
 */
class MockEchoService extends EchoService {
  /**
   * Is it necessary to mock this method?  Not really.  But consider methods that have complex behaviors, or that
   * need to hit databases or web services.  We don't want to test those underlying services.
   */
  echo(msg: string, louder: boolean): string {
    return 'ECHO';
  }
}

describe('MySecondComponentComponent', () => {
  let component: MySecondComponentComponent;
  let fixture: ComponentFixture<MySecondComponentComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySecondComponentComponent ],
      providers: [ {provide: EchoService, useClass: MockEchoService }] // Don't provide an instance!  Provide a stub.
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Query for the title <h1> by a CSS element selector.
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the message from the echo service', () => {
    fixture.detectChanges();
    // 'ECHO' is what the mock service always returns.
    expect(el.textContent).toContain('ECHO', 'We didn`t hear the echo.');
  });
});
