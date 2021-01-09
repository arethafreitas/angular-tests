import { AuthenticationService } from "./../authentication.service";
import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

class MochAuthService extends AuthenticationService {
  public isAuthenticated() {
    return true;
  }
}

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    let testBedAuthService: AuthenticationService;
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [AuthenticationService],
    }).compileComponents();

    TestBed.overrideComponent(LoginComponent, {
      set: {
        providers: [
          {
            provide: AuthenticationService,
            useClass: MochAuthService,
          },
        ],
      },
    });

    fixture = TestBed.createComponent(LoginComponent);
    // component = fixture.componentInstance;
    fixture.detectChanges();

    testBedAuthService = TestBed.get(AuthenticationService);
    it("should check the service", () => {
      expect(testBedAuthService instanceof AuthenticationService).toBeTruthy();
    });
  });

  it("should inject service using inject function and check its instance", inject(
    [AuthenticationService],
    (injectedService: AuthenticationService) => {
      expect(injectedService).toBeTruthy();
      expect(injectedService instanceof AuthenticationService).toBeTruthy();
    }
  ));

  it("should test injected service injected using component overriding", () => {
    fixture.debugElement.injector.get(
      AuthenticationService
    );
  });
});
