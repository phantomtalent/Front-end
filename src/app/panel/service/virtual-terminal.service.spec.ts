import { TestBed, inject } from '@angular/core/testing';

import { VirtualTerminalService } from './virtual-terminal.service';

describe('VirtualTerminalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VirtualTerminalService]
    });
  });

  it('should be created', inject([VirtualTerminalService], (service: VirtualTerminalService) => {
    expect(service).toBeTruthy();
  }));
});
