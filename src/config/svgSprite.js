//使用svg-sprite-loader 处理svg,自动导入svg-sprite
//引用:<svg><use xlink:href="#id"></use></svg> 
const  requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(require.context('../images/svgSpriteIcon'));