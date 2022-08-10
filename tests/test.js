import { Selector } from 'testcafe';
import VueSelector from 'testcafe-vue-selectors';

fixture('Getting Started').page('http://localhost:8080');

test('My first test', async (t) => {
  await t
    .expect(Selector('h1').innerText).eql('Welcome to Your Vue.js App');

  await t
    .click(Selector('a').withText('About'))
  // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('h1').innerText).eql('This is an about page');
});

test('My second test', async (t) => {
  const helloWorld = await VueSelector('HelloWorld');
  const helloWorldVue = await helloWorld.getVue();

  await t
    .expect(helloWorldVue.props.msg).eql('Welcome to Your Vue.js App');
});
