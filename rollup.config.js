import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const mapComponents = [	'buscador-operadores', 
                        'herramienta-diagnostico',
                        'administracion-festivos'];

export default mapComponents.map((name, index) => ({
    input: `build/${name}.js`,
    output: {
    	file: `build/components/${name}.js`,
        format: 'es',
		sourcemap: true
    },
    plugins: rollupPlugins()
}));

function rollupPlugins() {
	return [commonjs(), resolve(), babel()];
}
