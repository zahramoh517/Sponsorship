var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Worker } from 'near-workspaces';
import anyTest from 'ava';
import { setDefaultResultOrder } from 'dns';
setDefaultResultOrder('ipv4first'); // temp fix for node >v17
// Global context
var test = anyTest;
test.beforeEach(function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var worker, _a, root, contract;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = t.context;
                return [4 /*yield*/, Worker.init()];
            case 1:
                worker = _a.worker = _b.sent();
                root = worker.rootAccount;
                return [4 /*yield*/, root.createSubAccount('test-account')];
            case 2:
                contract = _b.sent();
                // Get wasm file path from package.json test script in folder above
                return [4 /*yield*/, contract.deploy(process.argv[2])];
            case 3:
                // Get wasm file path from package.json test script in folder above
                _b.sent();
                // Save state for test runs, it is unique for each test
                t.context.accounts = { root: root, contract: contract };
                return [2 /*return*/];
        }
    });
}); });
test.afterEach.always(function (t) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Stop Sandbox server
            return [4 /*yield*/, t.context.worker.tearDown().catch(function (error) {
                    console.log('Failed to stop the Sandbox:', error);
                })];
            case 1:
                // Stop Sandbox server
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
test('returns the default greeting', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var contract, greeting;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contract = t.context.accounts.contract;
                return [4 /*yield*/, contract.view('get_greeting', {})];
            case 1:
                greeting = _a.sent();
                t.is(greeting, 'Hello');
                return [2 /*return*/];
        }
    });
}); });
test('changes the greeting', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, root, contract, greeting;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = t.context.accounts, root = _a.root, contract = _a.contract;
                return [4 /*yield*/, root.call(contract, 'set_greeting', { greeting: 'Howdy' })];
            case 1:
                _b.sent();
                return [4 /*yield*/, contract.view('get_greeting', {})];
            case 2:
                greeting = _b.sent();
                t.is(greeting, 'Howdy');
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hdmEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3phaHJhL0Rlc2t0b3AvaGVsbG8tbmVhci8iLCJzb3VyY2VzIjpbInNhbmRib3gtdHMvbWFpbi5hdmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sT0FBbUIsTUFBTSxLQUFLLENBQUM7QUFDdEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7QUFFMUcsaUJBQWlCO0FBQ2pCLElBQU0sSUFBSSxHQUFHLE9BQTRFLENBQUM7QUFFMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFPLENBQUM7Ozs7O2dCQUVQLEtBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtnQkFBVSxxQkFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUEvQyxNQUFNLEdBQUcsR0FBVSxNQUFNLEdBQUcsU0FBbUI7Z0JBRy9DLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUNmLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsRUFBQTs7Z0JBQXRELFFBQVEsR0FBRyxTQUEyQztnQkFFNUQsbUVBQW1FO2dCQUNuRSxxQkFBTSxRQUFRLENBQUMsTUFBTSxDQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNoQixFQUFBOztnQkFIRCxtRUFBbUU7Z0JBQ25FLFNBRUMsQ0FBQztnQkFFRix1REFBdUQ7Z0JBQ3ZELENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsSUFBSSxNQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQzs7OztLQUN6QyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFPLENBQUM7Ozs7WUFDNUIsc0JBQXNCO1lBQ3RCLHFCQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7b0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELENBQUMsQ0FBQyxFQUFBOztnQkFIRixzQkFBc0I7Z0JBQ3RCLFNBRUUsQ0FBQzs7OztLQUNKLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyw4QkFBOEIsRUFBRSxVQUFPLENBQUM7Ozs7O2dCQUNuQyxRQUFRLEdBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLFNBQXZCLENBQXdCO2dCQUNmLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxFQUFBOztnQkFBMUQsUUFBUSxHQUFXLFNBQXVDO2dCQUNoRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7OztLQUN6QixDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsVUFBTyxDQUFDOzs7OztnQkFDN0IsS0FBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQXJDLElBQUksVUFBQSxFQUFFLFFBQVEsY0FBQSxDQUF3QjtnQkFDOUMscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUE7O2dCQUFoRSxTQUFnRSxDQUFDO2dCQUN4QyxxQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsRUFBQTs7Z0JBQTFELFFBQVEsR0FBVyxTQUF1QztnQkFDaEUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Ozs7S0FDekIsQ0FBQyxDQUFDIn0=