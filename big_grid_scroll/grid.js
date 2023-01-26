
var sedGridColumnMove = {
    mode:false,
    grid:null,
    index:null,
    startX:null
}
window.addEventListener('mousemove', function(event){
    console.log('mousemove')
    if(sedGridColumnMove.mode == true){
        // 뭔가 움직임을 넣고 싶을 경우
    }
});
window.addEventListener('mouseup', function(event){
    if(sedGridColumnMove.mode == true){
        var sedGridColumnMoveEndY = event.x;// Number(event.x.replace('px', ''));
        var moveGabX = sedGridColumnMoveEndY - sedGridColumnMove.startX;
        if(sedGridColumnMove.grid != null){
            var columns = sedGridColumnMove.grid.areaGrid.querySelectorAll('[colIndex=' + sedGridColumnMove.index + ']');
            var columnIndex = Number(sedGridColumnMove.index.replace('c', ''));
            var columnHeader = sedGridColumnMove.grid.areaGrid.querySelector('[colHeaderIndex=' + sedGridColumnMove.index + ']');
            sedGridColumnMove.grid.options.headers[columnIndex].width = sedGridColumnMove.grid.options.headers[columnIndex].width + moveGabX;
            columnHeader.style.width = sedGridColumnMove.grid.options.headers[columnIndex].width+ 'px';
            columnHeader.children[1].style.width= '10px';
            var columnTextWidth = (sedGridColumnMove.grid.options.headers[columnIndex].width - 11);
            if(columnTextWidth < 0){
                columnTextWidth = 0;
            }
            columnHeader.children[0].style.width= columnTextWidth + 'px';
            for(var i=0; i < columns.length; i++){
                columns[i].style.width = sedGridColumnMove.grid.options.headers[columnIndex].width+ 'px';
            }
            sedGridColumnMove.grid.rowWidth = sedGridColumnMove.grid.rowWidth + moveGabX;
            sedGridColumnMove.grid.areaHeaderRow.style.width = (sedGridColumnMove.grid.rowWidth + 20) + 'px';
            var rows = sedGridColumnMove.grid.areaGrid.querySelectorAll('[class=gridbodyrow]');
            for(var i=0; i < rows.length; i++){
                rows[i].style.width = (sedGridColumnMove.grid.rowWidth + 20) + 'px';
            }
        }
    }
    sedGridColumnMove.mode = false;
});
function Grid(){
    var me = this;
    me.options = {};
    me.height=0;
    me.width=0;
    me.scrollTop = 0;
    me.pageSize = 50;
    me.pageBlockRatio = 10;
    me.pageBlock = [];
    me.ratio = 1;
    me.ready = false;

    me.currentPage = 1;
    me.startPage = 1;    // 5일 경우 시작페이지는 5부터 처리된다. 
    me.endPage= -1;
    me.topPage = 0;
    me.bottomPage = 0;
    me.pageCount = 0;
    me.dataSize = 0;
    
    me.rowWidth = 0;
    me.headerHeight = 22;
    me.headerColHeight = 19;
    me.headerColFontSize = 11;
    me.rowHeight = 16;
    me.colBorder=0.5;
    me.areaDiv = null;
    me.areaGrid = null;
    me.areaHeader = null;
    me.areaHeaderRow = null;
    me.areaHeaderCol = [];
    me.areaBody = null;
    me.areaBodyTop = null;
    me.areaBodyCenter = null;
    me.areaBodyBottom = null;
    me.areaBodyPageTop = null;
    me.areaBodyPageCenter = null;
    me.areaBodyPageBottom = null;
    me.init = function(options, ref){
        me.options = JSON.parse(JSON.stringify(options));
        if(ref == null){
            alert('options.ref 그리드 영역이 설정되지 않았습니다.');
            return;
        }
        me.areaGrid = ref.querySelector('[ref=grid]');
        me.areaDiv = ref.querySelector('[ref=gridDiv]');

        me.areaGrid.setAttribute('class', 'grid');
        me.areaHeader = document.createElement('div');
        me.areaHeader.setAttribute('class', 'gridheader');
        me.areaHeaderRow = document.createElement('div');
        me.areaHeaderRow.setAttribute('class', 'gridheaderrow');
        me.areaBody = document.createElement('div');
        me.areaBody.setAttribute('class', 'gridbody');
        me.areaBodyTop = document.createElement('div');
        me.areaBodyTop.setAttribute('class', 'gridbodytop');
        me.areaBodyCenter = document.createElement('div');
        me.areaBodyCenter.setAttribute('class', 'gridbodycenter');
        me.areaBodyBottom = document.createElement('div');
        me.areaBodyBottom.setAttribute('class', 'gridbodybottom');

        me.areaBodyPageTop = document.createElement('div');
        me.areaBodyPageTop.setAttribute('class', 'gridbodypagetop');
        me.areaBodyPageCenter = document.createElement('div');
        me.areaBodyPageCenter.setAttribute('class', 'gridbodypagecenter');
        me.areaBodyPageBottom = document.createElement('div');
        me.areaBodyPageBottom.setAttribute('class', 'gridbodypagebottom');

        me.areaHeader.appendChild(me.areaHeaderRow);
        me.areaBodyCenter.appendChild(me.areaBodyPageTop);
        me.areaBodyCenter.appendChild(me.areaBodyPageCenter);
        me.areaBodyCenter.appendChild(me.areaBodyPageBottom);
        
        me.areaBody.appendChild(me.areaBodyTop);
        me.areaBody.appendChild(me.areaBodyCenter);
        me.areaBody.appendChild(me.areaBodyBottom);

        me.areaGrid.appendChild(me.areaHeader);
        me.areaGrid.appendChild(me.areaBody);

        me.resize();
        me.areaBody.addEventListener('scroll', function(event){
            me.scroll(event.target);
        });
    }
    me.resize = function(){
        me.areaBody.style.width = me.areaGrid.style.width;
        me.areaHeader.style.width = me.areaGrid.style.width;
        me.areaBody.style.height = (me.getPxToNumber(me.areaGrid.style.height) - me.headerHeight) + 'px';
    }
    me.getPxToNumber = function(val){
        return Number(val.replace('px', ''));
    }
    me.setHeader = function(headers){
        me.options.headers = JSON.parse(JSON.stringify(headers));
        var tempSum = 0;
        for(var i=0; i < me.options.headers.length; i++){
            var col = document.createElement('div');
            col.setAttribute('class', 'gridheadercol');
            col.style.width = me.options.headers[i].width + 'px';
            col.style.height = me.headerHeight + 'px';
            col.setAttribute('colHeaderIndex', 'c' + i);
            var colDiv = document.createElement('div');
            colDiv.setAttribute('class', 'gridheadercoldiv');
            colDiv.setAttribute('colDivIndex', 'c' + i);
            colDiv.style.width = '10px';
            colDiv.addEventListener('mousedown', function(event){
                sedGridColumnMove.grid = me;
                sedGridColumnMove.mode = true;
                sedGridColumnMove.index = event.target.getAttribute('colDivIndex');
                sedGridColumnMove.startX = event.x;
            });
            var colText = document.createElement('div');
            colText.style.float = 'left';
            colText.style.height = me.headerColHeight + 'px';
            
            colText.innerHTML = me.options.headers[i].text;
            colText.style['text-align'] = 'center';
            colText.style['font-size'] = me.headerColFontSize +'px';
            colText.style['padding-top'] = '3px';
            
            console.log('>>>>>', (me.options.headers[i].width - 11));
            colText.style.width = (me.options.headers[i].width - 11) + 'px';
            col.appendChild(colText);
            col.appendChild(colDiv);
            me.areaHeaderRow.appendChild(col);
            tempSum += Number(me.options.headers[i].width) + me.colBorder;
        }
        me.rowWidth = tempSum;
        me.areaHeaderRow.style.width = (me.rowWidth + 20) + 'px';

    }
    me.setUrl = function(url){
        me.url = url;
    }
    me.clear = function(){
        // 초기화
        me.options.data = [];
        me.areaBodyPageTop.innerHTML = '';
        me.areaBodyPageCenter.innerHTML = '';
        me.areaBodyPageBottom.innerHTML = '';
    }
    me.getPageSize = function(){
        return me.pageSize;
    }
    me.setPageSize= function(size){
        me.pageSize = size;
    }
    me.setData = function (data){
        me.data = data;
        me.dataSize = data.length;
        me.pageCount = Math.floor( (me.dataSize-1)/ me.pageSize);
        me.ready = true;
        me.page = 1;
        me.drawBodyTop(me.currentPage);
        me.drawTop(me.currentPage);
        me.drawCenter(me.currentPage);
        me.drawBottom(me.currentPage);
        me.drawBodyBottom(me.currentBottom);
    }
    me.getPageData = function(page){
        return me.data.slice( (page-1) * me.pageSize , (page) * me.pageSize);
    }
    me.drawTop = function(page){
        if(me.ready != true){
            return;
        }
        let data= me.getPageData(page-1, me.drawTopCallback);
        var dataLength = data.length;
        for(var i=0; i < dataLength; i++){
            var row = document.createElement('div');
            row.setAttribute('class', 'gridbodyrow');
            for(var j=0; j < me.options.headers.length; j++){
                var col = document.createElement('div');
                col.setAttribute('class', 'gridbodycol');
                col.setAttribute('colIndex', 'c' + j);
                var rowData = data[i];
                var val = rowData[me.options.headers[j].name];
                col.innerHTML = val;
                col.style.width = me.options.headers[j].width + 'px';
                col.style.height = me.rowHeight + 'px';
                if(me.options.headers[j].align != undefined){
                    col.style['text-align'] = me.options.headers[j].align;
                }
                row.appendChild(col);
                row.style.width = (me.rowWidth + 20) + 'px';
            }
            me.areaBodyPageTop.appendChild(row);
        }
    }
    me.drawCenter = function(page){
        if(me.ready != true){
            return;
        }
        let data= me.getPageData(page, me.drawTopCallback);
        var dataLength = data.length;
        console.log('page', page);
        for(var i=0; i < dataLength; i++){
            var row = document.createElement('div');
            row.setAttribute('class', 'gridbodyrow');
            for(var j=0; j < me.options.headers.length; j++){
                var col = document.createElement('div');
                col.setAttribute('class', 'gridbodycol');
                col.setAttribute('colIndex', 'c' + j);
                var rowData = data[i];
                var val = rowData[me.options.headers[j].name];
                col.innerHTML = val;
                col.style.width = me.options.headers[j].width + 'px';
                col.style.height = me.rowHeight + 'px';
                if(me.options.headers[j].align != undefined){
                    col.style['text-align'] = me.options.headers[j].align;
                }
                row.appendChild(col);
                row.style.width = (me.rowWidth + 20) + 'px';
            }
            me.areaBodyPageCenter.appendChild(row);
        }
    }
    me.drawBottom = function(page){
        if(me.ready != true){
            return;
        }
        let data= me.getPageData(page+1, me.drawTopCallback);
        var dataLength = data.length;
        for(var i=0; i < dataLength; i++){
            var row = document.createElement('div');
            row.setAttribute('class', 'gridbodyrow');
            for(var j=0; j < me.options.headers.length; j++){
                var col = document.createElement('div');
                col.setAttribute('class', 'gridbodycol');
                col.setAttribute('colIndex', 'c' + j);
                var rowData = data[i];
                var val = rowData[me.options.headers[j].name];
                col.innerHTML = val;
                col.style.width = me.options.headers[j].width + 'px';
                col.style.height = me.rowHeight + 'px';
                if(me.options.headers[j].align != undefined){
                    col.style['text-align'] = me.options.headers[j].align;
                }
                row.appendChild(col);
                row.style.width = (me.rowWidth + 20) + 'px';
            }
            me.areaBodyPageBottom.appendChild(row);
        }
    }
    me.beforeScrollTop = 0;
    me.beforeScrollLeft = 0;
    me.beforePage = 1;
    me.scrollPass = true;
    me.scroll = function(target, from){
        console.log('scroll top.............................', target.scrollTop);
        if(me.scrollPass == false){
            return;
        }
        me.scrollPass = false;
        var left = target.scrollLeft;
        me.areaHeader.scrollLeft = left;
        var top = target.scrollTop;
        me.currentPage = Math.floor( target.scrollTop / (me.rowHeight * me.pageSize) ) + 1 + me.startPage - 1;
        if(me.endPage != 0 && me.endPage != -1){
            if(me.currentPage > me.endPage){
                me.currentPage = me.endPage;
            }
        } else {
            if(me.currentPage > me.pageCount){
                me.currentPage = me.pageCount;
            }
        }
        if(me.currentPage != me.beforePage){
            var scrollDir = '';
            if(me.currentPage > me.beforePage){
                scrollDir = 'down';
            } else {
                scrollDir = 'up';
            }
            me.areaBodyCenter.removeChild(me.areaBodyPageTop);
            me.areaBodyCenter.removeChild(me.areaBodyPageCenter);
            me.areaBodyCenter.removeChild(me.areaBodyPageBottom);
            me.areaBodyPageTop = null;
            me.areaBodyPageCenter = null;
            me.areaBodyPageBottom = null;
            me.areaBodyPageTop = document.createElement('div');
            me.areaBodyPageTop.setAttribute('class', 'gridbodypagetop');
            me.areaBodyPageCenter = document.createElement('div');
            me.areaBodyPageCenter.setAttribute('class', 'gridbodypagecenter');
            me.areaBodyPageBottom = document.createElement('div');
            me.areaBodyPageBottom.setAttribute('class', 'gridbodypagebottom');
            me.drawTop(me.currentPage);
            me.drawCenter(me.currentPage);
            me.drawBottom(me.currentPage);
            me.areaBodyCenter.appendChild(me.areaBodyPageTop);
            me.areaBodyCenter.appendChild(me.areaBodyPageCenter);
            me.areaBodyCenter.appendChild(me.areaBodyPageBottom);

            me.drawBodyTop(me.currentPage);
            me.drawBodyBottom(me.currentPage);
            me.beforePage = me.currentPage;
            target.scrollTop = top;
            me.scrollPass = true;
        } else {
            me.scrollPass = true;
        }
        me.beforeScrollLeft = left;
        me.beforeScrollTop = top;
    }
    me.drawBodyTop = function(){
        var height = (me.currentPage- me.startPage + 1 -2) * me.pageSize * me.rowHeight;
        if(height < 0)
            height = 0;
        me.bodyTopHeight = height;
        me.areaBodyTop.style.height = me.bodyTopHeight + 'px';
    }
    me.drawBodyBottom = function(){
        var sum = (me.areaBodyPageTop.children.length + 
                me.areaBodyPageCenter.children.length + 
                me.areaBodyPageBottom.children.length) * me.rowHeight;
        var height = (me.pageCount) * me.pageSize * me.rowHeight - sum - me.bodyTopHeight;
        me.areaBodyBottom.style.height = height + 'px'; 
    }
}