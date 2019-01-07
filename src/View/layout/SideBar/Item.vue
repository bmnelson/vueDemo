<script>
    export default {
        name: 'MenuItem',
        functional: true,
        props: {
            icon: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: 'title'
            }
        },
        render: (createElement, context) => {
            let {icon, title} = context.props;
            const vnode = [];
            return createElement('div', [
                createElement('i', {class: 'iconfont ' + icon, style: {padding: '10px'}}),
                createElement('span', title)
            ]);
        }
    }
</script>