var atomMode = 'spec';

var pageIds = ['r08', 'r10', 't08', 't10', 'examples'];

var headers = {
    'r08': 'RAML 0.8 Spec',
    'r10': 'RAML 1.0 Spec',
    't08': 'RAML 0.8 Reference',
    't10': 'RAML 1.0 Reference',
    'examples': 'Examples',
};

var treeViewer;

function generateMenu(pageId) {
    if(pageId === 'examples') {
        return;
    }

    var sideBarList = document.getElementById('sidebar-nav-' + pageId);

    var namedLinks = document.getElementById('generated-md-content-' + pageId).getElementsByTagName('a');

    var needIntroduction = (pageId !== 't08' && pageId !== 't10');

    for (var i = 0; i < namedLinks.length; i++) {
        var namedLink = namedLinks[i];

        if (namedLink.name && namedLink.name.length > 0 && namedLink.parentNode.id && (namedLink.parentNode.id.indexOf('-a-name') === 0)) {
            var listItem = document.createElement('li');
            var linkToNamed = document.createElement('a');

            linkToNamed.href = '#' + namedLink.name;

            var innerHTML = namedLink.childNodes[0].nodeType === 3 ? namedLink.innerHTML : namedLink.childNodes[0].innerHTML;

            linkToNamed.innerHTML = (i === 0 && needIntroduction) ? 'Introduction' : innerHTML;

            listItem.className = 'list-group-item';
            listItem.appendChild(linkToNamed);

            if (i === 0 && needIntroduction) {
                //listItem.className = "sidebar-brand";
            }

            sideBarList.appendChild(listItem);
        }
    }
}
function fillExamples() {
    var result = "";

    projectDescriptors.forEach(function(x, i) {
        var tags = x.tags;

        var label = x.title + ' (' + (tags.indexOf('_api_') > -1 ? 'Api' : 'Example') + ')';

        var reference = '<li class="list-group-item atom-editor-example"><a href="javascript: openExample(' + i + ')">' + label + '</a></div>';

        result += reference;
    });

    document.getElementById('sidebar-nav-examples').innerHTML = result;
}

function openExample(index) {
    var atomFrame = document.getElementById('atom-wrapper');

    var frameWindow = atomFrame.contentWindow;

    frameWindow.postMessage({exampleId: '' + index}, '*');
}

function showPage(pageId) {
    selectedContentId = 'generated-md-content-' + pageId;

    pageIds.forEach(function(pageId) {
        sideBarId = 'sidebar-nav-' + pageId;
        contentId = 'generated-md-content-' + pageId;

        document.getElementById(contentId).style.display = contentId === selectedContentId ? null : 'none';
    });

    if(pageId === 'examples') {
        var atomFrame = document.getElementById('atom-wrapper');

        if(atomFrame.src && atomFrame.src.length > 0) {
            return;
        }

        fillExamples();

        atomFrame.style.display = null;

        atomFrame.src = 'bundled/index.html?project=iframe'
    }
}

function createCollapsiblePanel(id) {
    var panelElement = document.createElement('div');

    var panelHeadingElement = document.createElement('div');
    var panelCollapseElement = document.createElement('div');

    var panelTitleElement = document.createElement('div');
    var listGroupElement = document.createElement(id === 'examples' ? 'ul' : 'div');

    var buttonElement = document.createElement('a');

    panelElement.setAttribute('class', 'panel panel-default spec-menu-hidden');

    panelHeadingElement.setAttribute('id', 'heading-' + id);
    panelHeadingElement.setAttribute('class', 'panel-heading flex-column-initial');
    panelHeadingElement.setAttribute('role', 'tab');

    panelCollapseElement.setAttribute('id', 'collapse-' + id);
    panelCollapseElement.setAttribute('class', 'flex-fill menu-tree panel-spec panel-collapse collapse');
    panelCollapseElement.setAttribute('role', 'tabpanel');
    panelCollapseElement.setAttribute('aria-labelledby', 'heading-' + id);

    panelCollapseElement.onShow = function() {
        showPage(id);

        window.scrollTo(0, 0);

        panelElement.className = 'panel panel-default spec-menu-shown';
    }

    panelCollapseElement.onHide = function() {
        panelElement.className = 'panel panel-default spec-menu-hidden';
    }

    panelTitleElement.setAttribute('class', 'panel-title');

    listGroupElement.setAttribute('id', 'sidebar-nav-' + id);
    listGroupElement.setAttribute('class', id === 'examples' ? 'list-group' : 'panel-body');
    listGroupElement.setAttribute('style', 'display: block; position: absolute; height: 100%; width: 100%; overflow-y: auto;');

    buttonElement.setAttribute('class', 'collapsed');
    buttonElement.setAttribute('role', 'button');
    buttonElement.setAttribute('data-toggle', 'collapse');
    buttonElement.setAttribute('data-parent', '#accordion');
    buttonElement.setAttribute('href', '#collapse-' + id);
    buttonElement.setAttribute('aria-expanded', 'false');
    buttonElement.setAttribute('aria-controls', 'collapse-' + id);

    buttonElement.innerHTML = headers[id];

    panelElement.appendChild(panelHeadingElement).appendChild(panelTitleElement).appendChild(buttonElement);
    panelElement.appendChild(panelCollapseElement).appendChild(listGroupElement);

    document.getElementById('accordion').appendChild(panelElement);
}

function generateMenus() {
    pageIds.forEach(function(id) {
        createCollapsiblePanel(id);
        //generateMenu(id);
    });

    $(".panel-spec").on('show.bs.collapse', function() {
        this.onShow();
    });

    $(".panel-spec").on('hide.bs.collapse', function(){
        this.onHide();
    });
}

function treeViewerCreatorHandler(creator) {
    treeViewer = creator;

    buildMenuTrees();
}

function buildMenuTrees() {
    buildHeaderTree('r08');
    buildHeaderTree('r10');
    buildHeaderTree('t08');
    buildHeaderTree('t10');
}

function buildHeaderTree(pageId) {
    var elements = [];

    var result;

    var list = [];

    var containerElement = document.getElementById('generated-md-content-' + pageId);

    var regExp = /h([0-9]+)/;

    var current = null;

    for(var i = 0; i < containerElement.children.length; i++) {
        var child = containerElement.children[i];

        var tagName = child.tagName.toLowerCase();

        if(regExp.test(tagName)) {
            elements.push(child);
        }
    }

    elements.forEach(function(child, index) {
        var tagName = child.tagName.toLowerCase();

        var level = regExp.exec(tagName)[1];

        var name = pageId + '_' + index;

        var marker = document.createElement('a');

        marker.name = name;

        child.parentElement.insertBefore(marker, child);

        list.push({label: child.innerText, target: name, children: [], level: level});
    });

    var tree = treeViewer(buildHeaderTreeFromList(list));

    document.getElementById('sidebar-nav-' + pageId).appendChild(tree.ui());
}

function buildHeaderTreeFromList(list) {
    var root = {children: [], level: -100};

    var current = root;

    list.forEach(function(item) {
        if(item.level === current.level) {
            current.parent.children.push(item);

            item.parent = current.parent;

            current = item;

            return;
        }

        if(item.level > current.level) {
            current.children.push(item);

            item.parent = current;

            current = item;

            return;
        }

        if(item.level < current.level) {
            while(item.level < current.level) {
                current = current.parent;
            }

            if(item.level === current.level) {
                current.parent.children.push(item);

                item.parent = current.parent;

                current = item;

                return;
            }

            if(item.level > current.level) {
                current.children.push(item);

                item.parent = current;

                current = item;

                return;
            }
        }
    });

    return root.children;
}

generateMenus();

document.getElementById('page-content-wrapper').style.display = null;