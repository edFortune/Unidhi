import { SitesManagementModule } from './sites-management.module';

describe('SitesManagementModule', () => {
  let sitesManagementModule: SitesManagementModule;

  beforeEach(() => {
    sitesManagementModule = new SitesManagementModule();
  });

  it('should create an instance', () => {
    expect(sitesManagementModule).toBeTruthy();
  });
});
