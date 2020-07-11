import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallPromptComponent } from './install-prompt.component';
import { Router } from '@angular/router';

class MockRouter {
  public navigate(path: string[]) { }
}

describe('InstallPromptComponent', () => {
  let component: InstallPromptComponent;
  let fixture: ComponentFixture<InstallPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstallPromptComponent],
      providers: [
        {
          provide: Router, useClass: MockRouter
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
