export function CronExpresionInputTemplateGenerator(obj, objLang) {
    return ` 
          <div class="cronInput input-group">         
            <input class="cronInsideInput form-control" type="text" class="form-control" placeholder="${objLang.inputPlaceholder}">
            <div class="input-group-append">
            <a type="button" class="cronButtonUI">
            <div class="input-group-text">         
            <i class="bi bi-calendar2-week"></i>     
            </div>
            </a>
            </div>
         </div>   
  <small class="cronexpressionError hiden" style="display: none; color: red !important; margin-top: 5px !important; margin-bottom: 5px !important;">${objLang.invalidCron}</small>
  <div class="modal" id="modal-cron" tabindex="-1">
      <div class="modal-dialog modal-xl">
          <div class="modal-content">
              <div class="modal-header">               
                  <button type="button" class="btn-close cronClose" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <ul class="nav nav-tabs">
                      <li class="nav-item"><a class="nav-link active">${objLang.minute}</a></li>
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
  