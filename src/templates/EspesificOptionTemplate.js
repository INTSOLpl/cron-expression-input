export function EspesificOptionTemplateGenerator(getNumber, number) {
    return `
      <div style="margin: 10px;">
         
          <div class="form-check">
                <input id='nb_${number}' class="form-check-input" type="checkbox" value='${number}'>
                 <label class="form-check-label propagationClass" for='nb_${number}'>
                    <span class="numberValue">${getNumber}</span>            
                </label>
         </div>
             
        </div>
     
    `;
}