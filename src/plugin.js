class InsomniaXdebugPlugin {
    constructor() {
        this.nameCookie = 'XDEBUG_SESSION';
        this.enabled = true;
    }

    init() {
        this.btn();
        this.addCookie();
    }

    addCookie() {
        module.exports.requestHooks = [
            context => {
                if (this.enabled) {
                    context.request.setCookie(this.nameCookie, 'Insomnia');
                }
            }
        ];
    }

    btn() {
        module.exports.workspaceActions = [{
            label: 'xDebug' + (!this.enabled ? ' Enabled' : ' Disabled'),
            icon: 'fa-bug',
            action: async (context, models) => {
                this.enabled = !this.enabled;
                this.btn();
            },
        }];
    }
}

const plugin = new InsomniaXdebugPlugin();
plugin.init();