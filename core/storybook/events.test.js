import { registerEvents } from './events';

describe('events', () => {

    describe('registerEvents', () => {

        test('should not add any listeners when called without arguments', () => {
            const listenerStub = jest.fn();
            registerEvents.call({
                document: { addEventListener: listenerStub },
                window: {}
            });
            expect(listenerStub).not.toBeCalled();
        });

        test('should add a listener for each unique event when called with a list with duplicated events', () => {
            const listenerStub = jest.fn();
            registerEvents.call({
                document: { addEventListener: listenerStub },
                window: {}
            }, [
                'event-1',
                'event-1',
                'event-2',
            ]);
            expect(listenerStub.mock.calls[0][0]).toBe('event-1');
            expect(listenerStub.mock.calls[1][0]).toBe('event-2');
        });

        test('should add an handler for each event that triggers a storybook action when called with events', () => {
            const listenerMock = (event, handler) => handler({
                type: event,
                detail: 'event payload',
            });
            const actionStub = jest.fn(() => () => {});
            registerEvents.call({
                document: { addEventListener: listenerMock },
                window: {},
                action: actionStub
            }, ['event-1']);
            expect(actionStub).toBeCalled();
        });

    });

});