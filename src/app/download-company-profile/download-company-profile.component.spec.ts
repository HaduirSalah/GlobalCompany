import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCompanyProfileComponent } from './download-company-profile.component';

describe('DownloadCompanyProfileComponent', () => {
  let component: DownloadCompanyProfileComponent;
  let fixture: ComponentFixture<DownloadCompanyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadCompanyProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadCompanyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
