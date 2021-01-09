import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../authentication.service';
import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture : ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      providers: [AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assert value for "h1" element to be value of component', () => {
      component.getSalarySlip();
      /* detectar mudança no componente criado antes de chamar (caso contrário, erro de campo em branco) */
      fixture.detectChanges();

      expect(h1.textContent).toBe(component.salSlip);
  });

  it('should assert "checkAuthentication" has been called', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(true);
     // let salarySlip = component.getSalarySlip();
    // expect(salarySlip).toEqual('Salary Slip');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

})
