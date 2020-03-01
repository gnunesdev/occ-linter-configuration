/**
 * @fileoverview extendshoppingCartSummary_v15.js.
 *
 * @author
 */
define([
  'knockout',
  'ccResourceLoader!global/utils',
  'ccResourceLoader!global/validation',
], function(ko, utils, validate) {
  return {
    onLoad: function(widget) {
      widget.validate = validate;

      widget.actualProduct = [];

      widget.initializeOrderInfo = function(itemOrderContext) {
        const inputItemOrder = document.querySelector('#inputItemOrder');
        const inputNumberOrder = document.querySelector('#inputNumberOrder');

        inputItemOrder.value = '';
        inputNumberOrder.value = '';

        const modalInfoContainer = document.querySelector(
          '.x-cart__modal-data-info'
        );
        const modalInfoMessage = document.querySelector(
          '.x-cart__modal-message'
        );

        modalInfoContainer.classList.remove('.is--active');
        modalInfoMessage.classList.remove('is--success');
        modalInfoMessage.innerHTML = '';

        if (
          itemOrderContext.order_number() &&
          itemOrderContext.order_item_number()
        ) {
          inputItemOrder.value = itemOrderContext.order_number();
          inputNumberOrder.value = itemOrderContext.order_item_number();
        }

        widget.actualProduct = itemOrderContext;
      };

      widget.toggleOrderInfoModal = function(widgetContext, searchValues) {
        if (searchValues) {
          widget.initializeOrderInfo(widgetContext);
        }

        const modal = document.querySelector('.x-cart__modal-order-info');
        const modalBackground = document.querySelector(
          '.x-cart__modal-background'
        );

        modal.classList.toggle('is--active');
        modalBackground.classList.toggle('is--active');
      };

      widget.saveOrderInfo = function(itemOrderContext) {
        // guarantee that message is empty
        const modalInfoMessage = document.querySelector(
          '.x-cart__modal-message'
        );
        modalInfoMessage.classList.remove('is--success');

        const modalInfoContainer = document.querySelector(
          '.x-cart__modal-data-info'
        );

        try {
          const inputItemOrderValue = document.querySelector('#inputItemOrder')
            .value;
          const inputNumberOrderValue = document.querySelector(
            '#inputNumberOrder'
          ).value;

          if (!(inputItemOrderValue && inputNumberOrderValue)) {
            return error;
          }

          const btnSaveInfo = document.querySelector('.x-button__primary');
          btnSaveInfo.classList.add('is--loading');

          itemOrderContext.order_item_number(inputItemOrderValue);
          itemOrderContext.order_number(inputNumberOrderValue);

          setTimeout(function() {
            btnSaveInfo.classList.remove('is--loading');

            modalInfoContainer.classList.add('.is--active');

            modalInfoMessage.classList.remove('is--error');
            modalInfoMessage.classList.add('is--success');
            modalInfoMessage.innerHTML = 'Valores informados com sucesso';
          }, 1000);

          widget.cart().markDirty();
        } catch (error) {
          modalInfoContainer.classList.add('.is--active');
          modalInfoMessage.classList.add('is--error');
          modalInfoMessage.innerHTML =
            'Informe corretamente todos os campos ou tente novamente';
        }
      };

      widget.suffix = ko.computed(function() {
        if (utils.isMobile()) {
          return 'CC-shoppingCart-mobile-productQuantity-';
        }
        return 'CC-shoppingCart-productQuantity-';
      });

      widget.handleAddQuantity = function(parent, data, event) {
        if (!isNaN(data.quantity())) {
          if (data.quantity() < parent.orderableQuantity) {
            data.addQuantity(1);
            widget.updateQuantity(
              parent,
              event,
              widget.suffix() + widget.productId,
              widget.catRefId
            );
          } else {
            data.updatableQuantity.setError(
              data.updatableQuantity.rules()[2].message
            );
          }
        } else {
          data.updatableQuantity.setError(
            data.updatableQuantity.rules()[1].message
          );
        }
      };

      widget.handleRemoveQuantity = function(parent, data, event) {
        if (!isNaN(data.quantity())) {
          if (data.quantity() > 0) {
            if (data.quantity() > parent.orderableQuantity) {
              data.updatableQuantity(parent.orderableQuantity);
            } else {
              data.addQuantity(-1);
            }
            widget.updateQuantity(
              parent,
              event,
              widget.suffix() + widget.productId,
              widget.catRefId
            );
          }
        } else {
          data.updatableQuantity.setError(
            data.updatableQuantity.rules()[1].message
          );
        }
      };
    },

    beforeAppear: function() {},
  };
});
