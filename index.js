import Vue from 'vue';
import Vuex from 'vuex';
import {GraphView, GraphViewModule} from 'occubrow-graph-view';

function onReady(e) {
    console.log("document is ready");
    console.log("vue is %o", Vue);
    console.log("graphview is %o", GraphView);
    console.log("relevant module is %o", GraphViewModule);

    Vue.use(Vuex);

    const store = new Vuex.Store({
        modules: {
            graphView: GraphViewModule
        }
    });

    const props = {
        width: 800,
        height: 800,
        xMargin: 0,
        yMargin: 0,
        depthOffset: 120,
        textOffset: 22,
        breadth: 360,
        graphData: {
            content: "Root",
            id: 42,
            label: "Blah",
            strength: null,
            children: []
        },
        textContentTemplate: "{{content}}"
    };

    const vueInstance = new Vue({
        store,
        render: (h) => h(GraphView, {props})
    });
    vueInstance.$mount('#graph-target');
}

document.addEventListener('DOMContentLoaded', onReady);
