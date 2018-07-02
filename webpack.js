module.exports = {
    entry: './index.js',
    output: {
	path: __dirname,
	filename: 'bundle.js'
    },
    module: {
	// PUTA QUE PARIU! FINALMENTE ME LIVREI DESTES WARNINGS CHATOS PRA CARALHO!
	/*
	  WARNING in ./~/bindings/bindings.js
	  Critical dependencies:
	  74:22-40 the request of a dependency is an expression
	  74:43-53 the request of a dependency is an expression
	*/
	noParse: /node_modules\/bindings/,
	loaders: [
	    {
		test: /\.jsx?$/,
		loader: 'babel-loader',
		exclude: /node_modules/
	    }
	]
    },
//    externals: {
//	'bindings': 'bindings'
//    },
    node: {
	fs: 'empty'
    }
}
