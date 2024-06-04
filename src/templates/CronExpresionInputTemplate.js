export function CronExpresionInputTemplateGenerator(obj, objLang) {
  return `
          <div class="cronInput" style="display: flex !important; width: ${obj.width} !important; height: ${obj.height} !important;">
          <input class="cronInsideInput" type="text" class="form-control" placeholder="${objLang.inputPlaceholder}">
          <button type="button" class="cronButtonUI btn btn-custom" style="font-size: 114% !important; border-color: ${obj.colorMain} !important; background-color: ${obj.colorSecond} !important;">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="white">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </button>
        </div>
<small class="cronexpressionError hiden" style="display: none; color: red !important; margin-top: 5px !important; margin-bottom: 5px !important;">${objLang.invalidCron}</small>
<div class="modal" tabindex="-1">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header" style="height: 0px !important; padding-bottom: 30px !important;">               
                <button type="button" class="btn-close close2 cronClose" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="padding-top: 0px !important;">
                <ul class="nav nav-tabs" style="margin-top: 0px;">
                    <li class="nav-item active in"><a class="nav-link">${objLang.minute}</a></li>
                    <li class="nav-item"><a class="nav-link">${objLang.hours}</a></li>
                    <li class="nav-item"><a class="nav-link">${objLang.dayOfMonth}</a></li>
                    <li class="nav-item"><a class="nav-link">${objLang.month}</a></li>
                    <li class="nav-item"><a class="nav-link">${objLang.daysOfWeek}</a></li>
                </ul>
                <input class="inputCronMsg form-control" style="width: 100%; margin-top: 10px;" disabled />
                <div class="tab-content" style="margin-top: 8px !important;">
                    <div class="tab-pane active in">
                        <cron-fields pos="0" input="minute" hasZero="true" every="59" colorMain="${obj.colorMain}" colorSecond="${obj.colorSecond}" />
                    </div>
                    <div class="tab-pane fade">
                        <cron-fields pos="1" input="hour" hasZero="true" every="23" colorMain="${obj.colorMain}" colorSecond="${obj.colorSecond}" />
                    </div>
                    <div class="tab-pane fade">
                        <cron-fields pos="2" input="dayOfMonth" every="31" colorMain="${obj.colorMain}" colorSecond="${obj.colorSecond}" />
                    </div>
                    <div class="tab-pane fade">
                        <cron-fields pos="3" input="month" every="12" colorMain="${obj.colorMain}" colorSecond="${obj.colorSecond}" />
                    </div>
                    <div class="tab-pane fade">
                        <cron-fields pos="4" input="dayOfWeek" hasZero="true" every="6" colorMain="${obj.colorMain}" colorSecond="${obj.colorSecond}" />
                    </div>
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-primary cronSave"><i class="bi bi-check"></i>&nbsp;Save</button>
            <button type="button" class="btn btn-secondary cronClose">Close</button>
             </div>
        </div>       
    </div>
</div>
`;
}
