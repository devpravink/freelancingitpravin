import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeStudio } from './youtube-studio';

describe('YoutubeStudio', () => {
  let component: YoutubeStudio;
  let fixture: ComponentFixture<YoutubeStudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeStudio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeStudio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
